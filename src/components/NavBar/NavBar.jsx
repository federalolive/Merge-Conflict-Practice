import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-link">Welcome, {user.name}</li>
              <li><Link to={{pathname: "/ambersthings"}}>Amber's Things</Link>
              </li>
              <li><Link to="/users" className="nav-link">Users</Link></li>
              <Link to='' className='nav-link' onClick={handleLogout}>LOG OUT</Link>
              <li><Link to={{pathname: "/jonathansthings"}}>Jonathan's Things</Link></li>
              <li><Link
                to={{
                pathname: '/kimsthings',
                }}
              >
                Kims Things
              </Link>
              </li>
              <li>
                <Link 
                to={{
                  pathname: '/erinsthings'
                }}>
                Erin's Things
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
