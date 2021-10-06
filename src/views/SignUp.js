import { useState } from "react";

const SignUp = (props) => {

  const [usuario, setUsuario]           = useState('');
  const [contrasenia, setContrasenia]   = useState('');
  const [contrasenia2, setContrasenia2] = useState('');


  const crearUsuario = async () => {
    let url     = "http://localhost:4000/crearUsuario";
    
    let request = await fetch(url, {
      method       : "POST",
      body: new URLSearchParams({
        usuario    : usuario,
        contraseña : contrasenia,
      }),
    });
    
    let urlLogin = "http://localhost:4000/loginUsuario";

    if(request.status === 201) {
      let request2 = await fetch(urlLogin, {
        method       : "POST",
        body: new URLSearchParams({
          usuario    : usuario,
          contraseña : contrasenia,
        }),
      });

      if (request2.status !== 404) {
        let resTokenJson     = await request2.json();
        localStorage.setItem("token", JSON.stringify(resTokenJson.token));
        window.location.href = "http://localhost:3000/";
  
      } else {
        console.log("Usuario no encontrado");
      }
    }
  }

  const irLogin = () => {
    window.location.href = "http://localhost:3000/login";
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const onChangeUsuario = (event) => {
    setUsuario(event.target.value);
  }
  
  const onChangeContrasenia = (event) => {
    setContrasenia(event.target.value);
  }
  
  const onChangeContrasenia2 = (event) => {
    setContrasenia2(event.target.value);
  }

  const divStyle = {
    'margin-bottom': '10px',
  };

  return (
    <div className="page-single container">
      <div className="row ipad-width">
        <div className="col-md-9 col-sm-12 col-xs-12">
          <div className="form-style-1 user-pro" action="#">
            <form onSubmit={handleSubmit} className="password">
              <h4>Registrarse</h4>
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
                <div className="col-md-6 form-it">
                  <label>Repetir Contraseña</label>
                  <input type="password" onChange={onChangeContrasenia2}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <input
                    onClick={crearUsuario}
                    className="submit"
                    style={divStyle}
                    type="submit"
                    value="Crear usuario"
                  ></input>
                  <input
                    onClick={irLogin}
                    type="submit"
                    className="submit"
                    value="Iniciar Sesión"
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

export default SignUp;
