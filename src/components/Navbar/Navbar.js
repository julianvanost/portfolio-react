import React from 'react'
import {
  Link
} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Julian Van Ost</span>
      <button className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-item nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link" to='/about'>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link" to='/portfolio'>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link" to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar