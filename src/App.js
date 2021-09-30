import "./App.css";
import ListadoPeliculas from "./views/ListadoPeliculas";
// import Blog from "./views/Blog";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import EditarPelicula from "./views/EditarPelicula";

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/signup">
          <SignUp/>
        </Route>

        <Route path="/editarpelicula">
          <EditarPelicula/>
        </Route>
        
        <Route path="/">
        <ListadoPeliculas/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
