import "../App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import axios from "axios";
// import peliculasJson from "./peliculas.json";
import { useEffect, useState } from "react";

function ListadoPeliculas() {
  // let peliculas = peliculasJson;
  
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(()=>{
    buscarPeliculas();
    // console.log("Hola")
  }, []);

  const cantPeliculas = 4;
  let resPeliculas;

  const buscarPeliculas = () => {
    // // let url = "https://lucasmoy.dev/data/react/peliculas.json"
    // // let url = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json"
    // // let url = "http://localhost:4000/ObtenerPeliculas"
    // // let url = "https://serverless2-dybdpe7ex.vercel.app/api/meals"

    // axios.get('http://localhost:4000/ObtenerPeliculas', {
    // responseType: 'json'
    //   })
    //     .then(function(res) {
    //       if(res.status==200) {
    //         console.log(res.data);
    //         // debugger
    //       }
    //       console.log(res);
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //       // debugger
    //     })
        

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

export default ListadoPeliculas;
