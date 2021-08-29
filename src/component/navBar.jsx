import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <div>
            <nav style={{margin:'5px'}} className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
             <NavLink className="navbar-brand" to="/">Movies</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customers">Customers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rentails">Rentails</NavLink>
        </li>
        <li className="nav-item">
           {!props.user && <NavLink className="nav-link " to="/login" >Login</NavLink>}
        </li>
        <li className="nav-item">
          {!props.user &&
          <NavLink className="nav-link " to="/register" >Register</NavLink>
          }
        </li>
        <li className="nav-item">
        {/* to={`/account?user=${props.user.name}` */}
           {props.user && <NavLink className="nav-link " to='/account'>{props.user.name}</NavLink>}
        </li>
        <li className="nav-item">
          {props.user &&
          <NavLink className="nav-link " to="/logout" >Logout</NavLink>
          }
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
