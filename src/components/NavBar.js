import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CartWidget from './CartWidget';

function NavBar(props) {
  const [categories] = useState(props.categories);

  return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/" className="text-dark"> CompuShop </Link></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="nav-link dropdown-toggle" href="true" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categorías
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {categories.map(category => 
                <Link key={category.code} className="dropdown-item" to={`/category/${category.code}`}>{category.label}</Link>
            )}
          </div>
        </nav>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="/" className="p-2 text-dark">Inicio </Link>
          <Link to="/tienda" className="p-2 text-dark">Tienda</Link>
          <Link to="/categorias" className="p-2 text-dark">Categorias</Link>
        </nav>
        <CartWidget />
      </div>
  );
}

export default NavBar;
