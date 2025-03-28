import React from "react";
import { Link, NavLink } from 'react-router-dom';
const List=()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container">
            <NavLink to="/food" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/food">Food</NavLink>
      {/* <button className="btn btn-outline-primary ms-2 px-4 rounded-pill"> */}
      {/* <i className="fa fa-user-plus me-2"></i>Register</button> */}
      <ul class="navbar-nav me-auto ">
      <NavLink to="/donate/clothing" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/donate/clothing">Clothing</NavLink>
      <NavLink to="/donate/healthcheckup" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/donate/healthcheckup">Health Checkups</NavLink>
      <NavLink to="/signup" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/signup">Books</NavLink>
      <NavLink to="/signup" className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/signup">Others</NavLink>
      </ul>
            </div>
            </nav>
        </div>
    )
}
export default List;