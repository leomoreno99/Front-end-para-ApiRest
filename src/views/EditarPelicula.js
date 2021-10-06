import { useEffect, useState } from "react";



const EditarPelicula = (props) => {

    const [nombre, setNombre]     = useState('');
    const [imgUrl, setImgUrl]     = useState('');
    const [genero, setGenero]     = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [director, setDirector] = useState('');

    let localstorage_pelicula = localStorage.getItem("idpelicula");
    let localstorage_token    = JSON.parse(localStorage.getItem("token"));
    const obtenerPelicula = async () => {

        let url                 = `http://localhost:4000/obtenerPeliculaPorId/${localstorage_pelicula}`;
        let request             = await fetch(url, {
            method  : "GET",
            headers : {
                'Authorization' : localstorage_token
            }
        });
        
        if (request.status === 200) {
            const pelicula =  await request.json();
            pelicula.map(peli => {
                setNombre(peli.nombre);
                setGenero(peli.genero);
                setSinopsis(peli.sinopsis);
                setDirector(peli.director);
                setImgUrl(peli.URL_Imagen);
            })
            // debugger

        } else {
            console.log("Error al obtener pelicula");
        }
    }

    useEffect(() => {
        obtenerPelicula();
        // console.log("Hola")
      }, []);

      const divStyle = {
        height: '528px'
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      };

      const editarPelicula = async () => {
        // alert(localstorage_pelicula)
        let url = `http://localhost:4000/editarPelicula/${localstorage_pelicula}`;

        let request = await fetch(url, {
        method       : "PUT",
        headers      : {
            'Authorization' : localstorage_token
        },
        body: new URLSearchParams({
            nombre    : nombre,
            director : director,
            URL_Imagen : imgUrl,
            genero: genero,
            sinopsis : sinopsis,
        }),
        });

        //  debugger
        if (request.status === 200) {
            let response     = await request.json();
            alert(response)
            window.location.href = "http://localhost:3000/";
            
        } else {
        alert("Error al editar la pelicula")
        }
      }

      const onChangeNombre = (event) => {
          setNombre(event.target.value);
      }

      const onChangeimgUrl = (event) => {
          setImgUrl(event.target.value);
      }

      const onChangeDirector = (event) => {
          setDirector(event.target.value);
      }

      const onChangeGenero = (event) => {
          setGenero(event.target.value);
      }

      const onChangeSinopsis = (event) => {
          setSinopsis(event.target.value);
      }

    return (
    
    <div className="page-single container">
        <div className="col-md-4 col-sm-12 col-xs-12">
				<div className="movie-img sticky-sb">
					<img style={divStyle} src={imgUrl} alt=""></img>
					
				</div>
			</div>

        <div className="row ipad-width">

            <div className="col-md-9 col-sm-12 col-xs-12">
                <div className="form-style-1 user-pro" action="#">
                            <form onSubmit={handleSubmit} className="password">
                                <h4>Editar película</h4>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Titulo</label>
                                        <input type="text" value={nombre} onChange={onChangeNombre}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Descripcion</label>
                                        <input type="text" value={sinopsis} onChange={onChangeSinopsis}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Director</label>
                                        <input type="text" value={director} onChange={onChangeDirector}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Genero</label>
                                        <input type="text" value={genero} onChange={onChangeGenero}></input>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-2">
                                        <input onClick={editarPelicula} className="submit" type="submit" value="Guardar"></input>
                                    </div>
                                </div>	
                            </form>
                        </div>
            </div>

        </div>
    </div>
    
                
    )
}

export default EditarPelicula;