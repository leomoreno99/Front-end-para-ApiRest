import "./App.css";
import ListadoPeliculas from "./views/ListadoPeliculas";
// import Blog from "./views/Blog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import FormEditarPelicula from "./views/FormEditarPelicula";
import AgregarPelicula from "./views/AgregarPelicula";
import FiltrarPelicula from "./views/FiltrarPeliculas";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/editarpelicula">
          <FormEditarPelicula/>
        </Route>

        <Route path="/agregarpelicula">
          <AgregarPelicula/>
        </Route>
        
        <Route path="/filtrarpeliculas">
          <FiltrarPelicula/>
        </Route>

        <Route path="/">
          <ListadoPeliculas />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
