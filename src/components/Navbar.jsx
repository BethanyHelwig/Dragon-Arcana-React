export default function Navbar() {
    return (
        <nav>
            <a href="dashboard.html" className="logo-link">
                <img id="nav-logo" src="/src/assets/logo_dark_mode.png" />
                <h2 id="nav-title">Dragon Arcana</h2>
            </a>
            <button className="hamburger" data-btn="hamburger">&#9776;</button>
            <ul className="nav-links">
                <li><a href="characters.html" id="characters-btn">Characters <i class="fa-solid fa-user"></i></a></li>
                <li><a href="games.html">Games <i class="fa-solid fa-dice-d20"></i></a></li>
                <li><a href="friends.html">Friends <i class="fa-solid fa-user-group"></i></a></li>
                <li><a href="search.html">World of D&D <i class="fa-solid fa-book-atlas"></i></a></li>
                <li><a href="#">Profile <i class="fa-solid fa-gear"></i></a></li>
            </ul>
        </nav>
    )
}