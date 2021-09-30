import EditarPelicula from "./EditarPelicula";

const Pelicula = (props) => {
  
	const enviarEditarPelicula = (imag) =>{ 
		<EditarPelicula
		img={imag}
		/>
		
		window.location.href = "/editarpelicula";
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
						<p>GeneroSt: <a href="#">{props.genero}</a></p>
					</div>
					<div className="col-md-2">
                        <input onClick={()=>{enviarEditarPelicula(props.img)}} className="submit" type="submit" value="Editar"></input>
                    </div>
				</div>
    )

}

export default Pelicula;
