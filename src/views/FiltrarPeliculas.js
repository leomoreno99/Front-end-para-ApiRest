import "../App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import axios from "axios";
// import peliculasJson from "./peliculas.json";
import { useEffect, useState } from "react";

function FiltrarPeliculas() {
  // let peliculas = peliculasJson;

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    buscarPeliculas();
    // console.log("Hola")
  }, []);

  const cantPeliculas = 4;
  let resPeliculas;

  const buscarPeliculas = async () => {
    let nombre = JSON.parse(localStorage.getItem("nombrePelicula"));
    let url = `http://localhost:4000/obtenerPeliculaPorNombre/${nombre}`;
    // debugger
    const localstorage_user = JSON.parse(localStorage.getItem("token"));
    // const inMemoryToken = localstorage_user.token;
    if(localstorage_user) {

      let request = await fetch(url, {
        method : 'GET',
        headers : {
          'Authorization' : localstorage_user
        }
      });
      resPeliculas = await request.json();
  
      setPeliculas(resPeliculas);
    } else {
        window.location.href = 'http://localhost:3000/login'
    }

  };

  

  const getTotalPaginas = () => {
    return Math.ceil(peliculas.length / cantPeliculas);
  };

  let pagI = cantPeliculas * (paginaActual - 1);
  let peliculasPorPagina = peliculas.slice(pagI, pagI + cantPeliculas);

  return (
    <PageWrapper>
      {peliculasPorPagina.map((pelicula) => (
        <Pelicula
          id={pelicula._id}
          titulo={pelicula.nombre}
          director={pelicula.director}
          img={pelicula.URL_Imagen}
          genero={pelicula.genero}
        >
          {pelicula.sinopsis}
        </Pelicula>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default FiltrarPeliculas;