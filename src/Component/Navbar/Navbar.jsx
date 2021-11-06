import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({loginData , loguot}) {
  // console.log(loginData);
    return (
      <>
        <nav className="navbar nav-new-bg navbar-expand-lg navbar-dark">
          <div className="container-fluid py-1">
            <NavLink className="navbar-brand fs-2 fw-bolder" to="/home">Noxe</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {loginData?
              <>
                <ul className="navbar-nav me-auto pt-2 mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink activeClassName="text-info" className="nav-link h6 px-2" to="/MovieDB-By-React/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="text-info" className="nav-link h6 px-2" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="text-info" className="nav-link h6 px-2" to="/movies">Movies</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="text-info" className="nav-link h6 px-2" to="/tvshows">TvShows</NavLink>
                  </li>
                </ul>
              </>:''}
              <ul className="navbar-nav ms-auto pt-2 mb-2 mb-lg-0">
                {loginData?
                  <>
                  <li className="nav-item  pe-5">
                    <h2 className='h5 px-2 text-white'>welcom back <span className='h3 text-warning'>{loginData.first_name} </span> </h2>
                  </li>
                  </>:''}
                <li className="nav-item">
                  <a activeClassName="text-info" className="nav-link h6 px-2 text-white" href="https://www.facebook.com/" target='_blank'><i className='fab fa-facebook'></i></a>
                </li>
                <li className="nav-item">
                  <a activeClassName="text-info" className="nav-link h6 px-2 text-white" href="https://www.instagram.com/" target='_blank'><i className='fab fa-instagram'></i></a>
                </li>
                <li className="nav-item">
                  <a activeClassName="text-info" className="nav-link h6 px-2 text-white" href="https://www.youtube.com/" target='_blank'><i className='fab fa-youtube'></i></a>
                </li>
                {loginData?
                  <li onClick={loguot} className="nav-item">
                    <h3 className="nav-link h6 px-2 cursor-pointer">Logout</h3> 
                  </li>:
                  <>
                    <li className="nav-item">
                      <NavLink activeClassName="text-info" className="nav-link h6 px-2" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="text-info" className="nav-link h6 px-2" to="/register">Register</NavLink>
                    </li>
                  </>}
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}
