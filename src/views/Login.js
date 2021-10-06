import { useEffect, useState } from "react";

const Login = (props) => {
  const [usuario, setUsuario]         = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const buscarToken = async () => {
        let url = "http://localhost:4000/loginUsuario";

        let request = await fetch(url, {
          method       : "POST",
          body: new URLSearchParams({
              usuario    : usuario,
              contraseña : contrasenia,
          }),
        });

        //  debugger
        if (request.status !== 404) {
        let resTokenJson     = await request.json();
        // debugger
        // let resTokenJson     = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTVlYmRiYmUyMDQ3MjMzZGE3OTgyMiIsImlhdCI6MTYzMzAyNzI0OSwiZXhwIjoxNjMzMDMwODQ5fQ.lPr9dTLpY8ETkVxVOquQL3J_tl3crlGuwPqhjHWCJLY";
        localStorage.setItem("token", JSON.stringify(resTokenJson.token));
        // localStorage.setItem("token", JSON.stringify(resTokenJson));
        window.location.href = "http://localhost:3000/";
            
        } else {
        console.log("Usuario no encontrado");
        }
        
    };

  const irSignup = () => {
    window.location.href = "http://localhost:3000/signup";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  const onChangeUsuario = (event) => {
    setUsuario(event.target.value);
    // debugger;
  };

  const onChangeContrasenia = (event) => {
    setContrasenia(event.target.value);
  };

  const divStyle = {
    'margin-bottom': '10px'
  };

  return (
    <div className="page-single container">
      <div className="row ipad-width">
        <div className="col-md-9 col-sm-12 col-xs-12">
          <div className="form-style-1 user-pro" action="#">
            <form onSubmit={handleSubmit} className="password">
              <h4>Iniciar sesión</h4>
              <div className="row">
                <div className="col-md-6 form-it">
                  <label>Usuario</label>
                  <input type="text" onChange={onChangeUsuario}></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-it">
                  <label>Contraseña</label>
                  <input type="password" onChange={onChangeContrasenia}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <input
                    onClick={buscarToken}
                    className="submit"
                    type="submit"
                    style={divStyle}
                    value="Iniciar sesión"
                  ></input>
                  <input
                    onClick={irSignup}
                    type="submit"
                    className="submit"
                    value="Crear usuario"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
