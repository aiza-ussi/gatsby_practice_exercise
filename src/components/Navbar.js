import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/unosoft_header.png'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation" style={{ height: '150px' }}>
    <img src={logo} className="d-block mx-auto h-100 w-100 img-fluid"/><br/>
    <div className="container">
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered mx-auto">
        <Link className="navbar-item mx-2" to="/">
          Home
        </Link>
        <Link className="navbar-item mx-2" to="/about">
          About
        </Link>
        <Link className="navbar-item mx-2" to="/products">
          Projects
        </Link>
        <Link className="navbar-item mx-2" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item mx-2" to="/contact/examples">
          Careers
        </Link>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
