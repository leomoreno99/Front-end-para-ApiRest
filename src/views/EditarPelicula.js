

const EditarPelicula = (props) => {

    let img = props.img
    debugger
    
    return (
    
    <div className="page-single container">
        <div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
					<img src={props.img} alt=""></img>
					
				</div>
			</div>

        <div class="row ipad-width">

            <div class="col-md-9 col-sm-12 col-xs-12">
                <div className="form-style-1 user-pro" action="#">
                            <form action="#" className="password">
                                <h4>Editar película</h4>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Titulo</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Descripcion</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Director</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-it">
                                        <label>Genero</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-2">
                                        <input className="submit" type="submit" value="Guardar"></input>
                                    </div>
                                </div>	
                            </form>
                        </div>
            </div>

        </div>
    </div>
    
                
    )
}

export default EditarPelicula;