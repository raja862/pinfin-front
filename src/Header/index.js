import React from "react"
import { NavLink } from "react-router-dom"

import './Header.css'
const Header=()=>{

    return(<div className="header">
    
   

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <span className="navbar-brand">Employeelist</span>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="/" >Home </NavLink>
      <NavLink className="nav-item nav-link" to="/employee/add">ADD EMPLOYEE</NavLink>
      <NavLink className="nav-item nav-link" to="/contact" >Contact Us</NavLink>
  
    </div>
  </div>
</nav>

  
    </div>)
}
export default Header