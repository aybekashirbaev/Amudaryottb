import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from '../assets/logo.png' 
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  var sticky = navbar.offsetTop;

  const changeBackground = () => {
    if(window.scrollY >= 1){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className="navigation">
      <div className="nav-head">
        <div className="nav-head-contact">
          <a href="">
            <i class="fa-solid fa-envelope"></i> amudaryo_ttb@exat.uz
          </a>
          <a href="tel: +998(61)515-11-33">
            <i class="fa-solid fa-phone"></i> +998(61)515-11-33
          </a>
        </div>
        <div className="nav-head-networks">
          <a href="">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <h1 className="logo">
          <img src={Logo} alt="" /> AmudaryoTTB
        </h1>
        <ul className={click ? "nav active" : "nav"}>
          <li onClick={closeMobileMenu}>
            <Link to='/'>
              <i class="fa-solid fa-house"></i> Bosh sahifa
            </Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to='/managements'>
              <i class="fa-solid fa-people-roof"></i> Rahbariyat
            </Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to='/news'>
              <i class="fa-solid fa-newspaper"></i> Yangiliklar
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;