import CartWidget from './CartWidget';

function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
          <a className="navbar-brand" href="/#">CompuShop</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav justify-content-between">
                      <a className="nav-link nav-item" href="/#">Home <span className="sr-only">(current)</span></a>
                  <div className="nav-item nav-item dropdown">
                      <a className="nav-link nav-item dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/#">PC</a>
                        <a className="dropdown-item" href="/#">Notebook</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/#">Perifericos</a>
                      </div>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                  <div className="icon">
                      <CartWidget />
                  </div>
              </div>
          </div>
        </nav>
  );
}

export default NavBar;
