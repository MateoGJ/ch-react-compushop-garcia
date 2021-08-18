import { Link } from 'react-router-dom';

function Footer ({categories}) {
  return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/" className="text-dark"> CompuShop </Link></h5>
            <small className="d-block mb-3 text-muted">&copy; 2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Categorías</h5>
            <ul className="list-unstyled text-small">

              {categories.map(category => 
                  <li>
                      <Link key={category.code} className="dropdown-item" to={`/category/${category.code}`}>
                          {category.label}
                      </Link>
                  </li>
              )}
            </ul>
          </div>
          <div className="col-6 col-md">
          </div>
          <div className="col-6 col-md">
          </div>
        </div>
      </footer>
    );
}

export default Footer;
