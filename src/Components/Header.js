import React from 'react';
import { Link} from "react-router-dom";
import Nav from './Nav';

const Header = () => {
  return (
    <>
    
    {/* Navigation 15.43  */}
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          {/* Logo and responsive toggle */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={'/'}><span className="glyphicon glyphicon-globe"></span> Logo</Link>
          </div>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbar">

            {/* Nave Router */}
            <Nav />

            {/* Search */}
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span> Search</button>
            </form>

          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
      </nav>

    </>
  )
}

export default Header