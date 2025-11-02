import React from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./ThemeProvider"

export default function Navbar() {

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <nav>
            <Link to="/" className="logo-link">
                <img id="nav-logo" src={theme === 'dark' ? "/src/assets/logo_dark_mode.png" : "/src/assets/logo_light_mode.png"} />
                <h2 id="nav-title">Dragon Arcana</h2>
            </Link>
            <button className="hamburger" data-btn="hamburger">&#9776;</button>
            <ul className="nav-links">
                <li><Link to="characters">Characters <i className="fa-solid fa-user"></i></Link></li>
                <li><Link to="games">Games <i className="fa-solid fa-dice-d20"></i></Link></li>
                <li><Link to="friends">Friends <i className="fa-solid fa-user-group"></i></Link></li>
                <li><Link to="/search">World of D&D <i className="fa-solid fa-book-atlas"></i></Link></li>
                <li><a href="#">Profile <i className="fa-solid fa-gear"></i></a></li>
                <li>
                    <button id="theme-toggle-btn" onClick={toggleTheme}>
                        {theme === 'light'? 
                            <i className="fa-solid fa-moon"></i> :
                            <i className="fa-solid fa-sun"></i>
                        }
                    </button>
                </li>
            </ul>
        </nav>
    )
}