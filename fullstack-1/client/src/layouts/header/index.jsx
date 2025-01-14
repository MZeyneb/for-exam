import React from 'react'
import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"
const Header = () => {
  return (
    <>
    <div className={styles["logo"]}>
        <div className="log">
            <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
        </div>
    </div>
    <nav>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/wines"}>Wines</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>

        </ul>
    </nav>
    </>
  )
}

export default Header