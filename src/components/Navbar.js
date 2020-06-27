import React from 'react';
import { Link} from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">

        <Link to = "/" className="navbar-brand">Shopping</Link>

        <ul className="nav navbar-nav">
          <li ><Link to="/">Shop</Link></li>
          <li> <Link to ="/cart"> My Cart</Link> </li>
          <li ><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
        </ul>
      </div>
    </nav>
  )


}
export default Navbar;
