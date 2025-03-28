import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {useAuth} from "../store/auth";
const Navbar = () => {
  const {isLoggedIn}=useAuth();
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/knowledgehub">Knowledge HUB</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ngo">NGO Requirement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Donate">Donate</a>
        </li>
        
        
      </ul>
      <a class="navbar-brand fw-bloder fs-4 me-5" href="/">HOPE HARBOR</a>
      {isLoggedIn ? <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/logout">Logout</NavLink> : (
        <>
        <NavLink to="/login" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/login">Login</NavLink>
      {/* <button className="btn btn-outline-primary ms-2 px-4 rounded-pill"> */}
      {/* <i className="fa fa-user-plus me-2"></i>Register</button> */}
      <NavLink to="/signup" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/signup">Register</NavLink>
        </>
      )}
     
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
