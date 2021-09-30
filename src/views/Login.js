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

    if (request.status !== 404) {
      let resTokenJson     = await request.json();
      localStorage.setItem("token", JSON.stringify(resTokenJson.token));
      window.location.href = "http://localhost:3000/";

    } else {
      console.log("Usuario no encontrado");
    }
  };

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
                    value="Iniciar sesión"
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
