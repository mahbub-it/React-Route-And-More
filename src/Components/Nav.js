import React, { useState } from 'react';
import { Link, useLocation} from "react-router-dom";
import { Helmet} from "react-helmet-async";

const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const address = useLocation();
   
    const allNavLinks = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/products',
            name: 'Products'
        }
    ]

  return (
    <>
    <Helmet>
      {address.pathname === '/' && <title>Home</title>}
      {address.pathname === '/about' && <title>About</title>}
      {address.pathname === '/products' && <title>Products</title>}
      {address.pathname === '/services' && <title>Services</title>}
      {address.pathname === '/contact' && <title>Contact</title>}
      {address.pathname === '/services/engage' && <title>Engage</title>}
      {address.pathname === '/services/pontificate' && <title>Pontificate</title>}
      {address.pathname === '/services/synergize' && <title>Synergize</title>}
    </Helmet>
    
      {/* Navigation */}
      <ul className="nav navbar-nav">
        {allNavLinks.map((navLink, index) => 
        {
          return(
          <li key={index} className={address.pathname === navLink.path ? 'active' : ''}>
            <Link to={navLink.path}>{navLink.name}</Link>
          </li>
        )
        }
        )}
              
              {/* Dropdown Menu */}
              <li className={`dropdown ${address.pathname.startsWith('/services') ? 'active' : ''} ${isDropdownOpen ? 'open show' : ''}`}>
                <Link 
                  to={'/services'} 
                  className="dropdown-toggle" 
                  data-toggle="dropdown" 
                  role="button" 
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  onClick={(e) => {
                    // Toggling the dropdown. If you want navigation to work too,
                    // we might need a separate toggle element or a different click handler.
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  Services <span className="caret"></span>
                </Link>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="services-dropdown">
                  <li><Link to="/services/engage" onClick={() => setIsDropdownOpen(false)}>Engage</Link></li>
                  <li><Link to="/services/pontificate" onClick={() => setIsDropdownOpen(false)}>Pontificate</Link></li>
                  <li><Link to="/services/synergize" onClick={() => setIsDropdownOpen(false)}>Synergize</Link></li>
                </ul>
              </li>

              {/* Contact Link */}
              <li className={address.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

    </>
  )
}

export default Nav