import { useEffect, useState } from "react";


const PageWrapper = (props) => {

  const [peliBuscar, setPeliBuscar] = useState('')

  const onChangeBusqueda = (event) => {
      setPeliBuscar(event.target.value);
  }

  const enviarNombre = () => {
    localStorage.setItem("nombrePelicula", JSON.stringify(peliBuscar));
    window.location.href = "http://localhost:3000/filtrarpeliculas";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  return (
    <div>
      
      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom" />
          <div className="navbar-header logo">
            <div
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <a href="index-2.html">
              <img
                className="logo"
                src="images/logo3.png"
                alt=""
                width="119"
                height="58"
              />
            </a>
          </div>
          <div className="collapse app" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden barranav">
                <a href="#page-top"></a>
              </li>
              <li className="dropdown first barranav">
                <a href="/" className="btn btn-default dropdown-toggle lv1">
                  Inicio
                </a>
              </li>
              <li className="dropdown first barranav">
                <a href="/agregarpelicula" className="btn btn-default dropdown-toggle lv1">
                  Agregar Pelicula
                </a>
              </li>
            </ul>

            <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="dropdown first barranav">
                <a
                  href="/login"
                  className="btn btn-default dropdown-toggle lv1"
                >
                  Iniciar sesión
                </a>
              </li>

              <li className="dropdown first boton-signup barranav">
                <a
                  href="/signup"
                  className="btn btn-default dropdown-toggle lv1"
                >
                  Registrarse
                </a>
              </li>
            </ul>
          </div>

          <div className="top-search">
            <form onSubmit={handleSubmit}>
              <input
                onChange={onChangeBusqueda}
                type="text"
                placeholder="Buscar película por nombre"
              ></input>
              {/* <li className="dropdown first boton-signup barranav">
                        <a href="/signup" className="btn btn-default dropdown-toggle lv1">Registrarse</a>
                    </li> */}
              <div className="col-md-2">
                <input onClick={enviarNombre} className="submit" type="submit" value="Buscar"></input>
              </div>
            </form>
          </div>
        </div>
      </header>

      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1> Listado de películas</h1>
                {/* <ul className="breadcumb">
                            <li className="active"><a href="#">Home</a></li>
                            <li> <span className="ion-ios-arrow-right"></span> movie listing</li>
                        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single movie_list">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p>
                  Found <span>1,608 movies</span> in total
                </p>
                <label>Sort by:</label>
                <select>
                  <option value="popularity">Popularity Descending</option>
                  <option value="popularity">Popularity Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
                <a href="movielist.html" className="list">
                  <i className="ion-ios-list-outline active"></i>
                </a>
                <a href="moviegrid.html" className="grid">
                  <i className="ion-grid"></i>
                </a>
              </div>

              {props.children}
            </div>
          </div>
        </div>
      </div>
      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <a href="index-2.html">
                <img className="logo" src="images/logo3.png" alt="" />
              </a>
              <p>
                5th Avenue st, manhattan
                <br />
                New York, NY 10001
              </p>
              <p>
                Call us: <a href="#">(+01) 202 342 6789</a>
              </p>
            </div>
            <div className="flex-child-ft item2">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blockbuster</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item3">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item4">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Watchlist</a>
                </li>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">User Guide</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item5">
              <h4>Newsletter</h4>
              <p>
                Subscribe to our newsletter system now <br /> to get latest news
                from us.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your email..." />
              </form>
              <a href="#" className="btn">
                Subscribe now <i className="ion-ios-arrow-forward"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p>
              <a target="_blank" href="https://www.templateshub.net">
                Templates Hub
              </a>
            </p>
          </div>
          <div className="backtotop">
            <p>
              <a href="#" id="back-to-top">
                Back to top <i className="ion-ios-arrow-thin-up"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageWrapper;
