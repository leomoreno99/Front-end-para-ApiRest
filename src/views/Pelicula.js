import EditarPelicula from "./EditarPelicula";
import ListadoPeliculas from "./ListadoPeliculas";


const Pelicula = (props) => {
  
	const enviarEditarPelicula = (imag) =>{ 
		        localStorage.setItem("idpelicula",props.id);
				window.location.href = "/editarpelicula";

		}

	const borrarPelicula = async () => {
		let url     = `http://localhost:4000/borrarPelicula/${props.id}`;
		const localstorage_user = JSON.parse(localStorage.getItem("token"));
		let request = await fetch(url, {
		method       : "DELETE",
		headers : {
			Authorization : localstorage_user
		}
		});
		
		if (request.status === 200) {
			console.log("Pelicula eliminada correctamente")
			window.location.href = "http://localhost:3000/";

		} else {
			console.log("Error al eliminar la pelicula");
		}
		

	}

    return (
        <div className="movie-item-style-2">
					<img src={props.img} alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">{props.titulo}</a></h6>
						{/* <p className="rate"><i className="ion-android-star"></i><span>{props.calificacion}</span> /10</p> */}
						<p className="describe">{props.children}</p>
						{/* <p className="run-time"> Duracion: {props.duracion}    .     <span>Fecha:{props.fecha}</span></p> */}
						<p>Director: <a href="#">{props.director}</a></p>
						<p>Genero: <a href="#">{props.genero}</a></p>
						<p>ID: <a href="#">{props.id}</a></p>
					</div>
					<div className="col-md-2">
                        <input onClick={()=>{enviarEditarPelicula(props.img)}} className="submit" type="submit" value="Editar"></input>
                    </div>
					<div className="col-md-2">
                        <input onClick={borrarPelicula} className="submit" type="submit" value="Borrar"></input>
                    </div>
				</div>
    )

}

export default Pelicula;
