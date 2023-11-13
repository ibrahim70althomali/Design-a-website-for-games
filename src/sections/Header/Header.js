/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Header.css'

import logo from '../../components/assets/images/logo.png'
//  كود ذا من مكتبه بوست تراب 
// راح يكون فيه اخطاء لان كوبونت لازم تغلق التاق

   const Header = () => {
  return (
        <div className="navbar navbar-expand-md navbar-dark">
        <div className="container">
        <a href="#" className="navbar-brand">
        <img src={logo} alt=''>
        </img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#features" className="nav-link">Browse</a></li>
                <li className="nav-item"><a href="#faq" className="nav-link">Streames</a></li>
                <li className="nav-item"><a href="./index-ar.html" className="nav-link">Profile</a></li>
            </ul>
        </div>
    </div>
</div>  
    ) 
}

export default Header
