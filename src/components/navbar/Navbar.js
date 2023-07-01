import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <ul className='nav-list'>
          <li className='home'>
            <Link className='link'
              to="/"
            >
              Home
            </Link>
          </li>
          <li className='nav-about'>
            <Link className='link'
              onClick={() => {
                let about = document.getElementById("about");
                about &&
                about.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }
            >
              About
            </Link>
          </li>
          <li className='precautions'>
            <Link className='link'
              onClick={() => {
                let precautions = document.getElementById("precautions");
                precautions &&
                precautions.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }
            >
              Precautions
            </Link>
          </li>
          <li className='map'>
            <Link className='link'
              onClick={() => {
                let map = document.getElementById("map");
                map &&
                map.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
      <hr></hr>
    </nav>
  )
}

export default navbar