import { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends  Component{

  render(){
    return(
  
        <>
       
<nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://www.thepie.com/images/pie_logo.png" alt="Logo" width="85" height="70" className="d-inline-block align-text-top"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact-us">Contact Us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/add-product">Add New Product</Link></li>
            <li><Link className="dropdown-item" to="/our-product" >Our Menu</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>



        </>
    )
}
}


export default Menu;