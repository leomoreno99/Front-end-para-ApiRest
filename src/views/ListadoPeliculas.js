import "../App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
// import peliculasJson from "./peliculas.json";
import { useEffect, useState } from "react";

function ListadoPeliculas() {
  // let peliculas = peliculasJson;
  
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(()=>{
    buscarPeliculas();
  }, []);

  const cantPeliculas = 4;
  let resPeliculas;

  const buscarPeliculas = async () => {
    // let url = "https://lucasmoy.dev/data/react/peliculas.json"
    let url = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json"

    let request = await fetch(url, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Origin": "https://raw.githubusercontent.com/"
    }
    });
    resPeliculas = await request.json()

    setPeliculas(resPeliculas);

  }

  

  
  const getTotalPaginas = () => {
    return Math.ceil(peliculas.length / cantPeliculas);
  };


  let pagI = cantPeliculas*(paginaActual-1)
  let peliculasPorPagina = peliculas.slice(pagI, pagI + cantPeliculas);

  return (
      
    <PageWrapper>
      

      {peliculasPorPagina.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
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

export default ListadoPeliculas;
