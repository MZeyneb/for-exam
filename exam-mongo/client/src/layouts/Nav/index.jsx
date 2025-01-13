import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Nav/index.css"
const Nav = () => {
  return (
    <nav>
         <ul>
         <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add">
                Add
              </NavLink>
            </li>
            <li>
              <NavLink to="/details">
                Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">
                Wishlist
              </NavLink>
            </li>

            </ul>
    </nav>
  )
}

export default Nav
