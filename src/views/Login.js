

const Login = (props) => {
    
    return (
    
    <div className="page-single container">
        <div class="row ipad-width">

            <div class="col-md-9 col-sm-12 col-xs-12">
                <div className="form-style-1 user-pro" action="#">
                            <form action="#" className="password">
                                <h4>Iniciar sesión</h4>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Usuario</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Contraseña</label>
                                        <input type="password"></input>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-2">
                                        <input className="submit" type="submit" value="Iniciar sesión"></input>
                                    </div>
                                </div>	
                            </form>
                        </div>
            </div>

        </div>
    </div>
    
                
    )
}

export default Login;