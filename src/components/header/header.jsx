import React, {useState} from 'react';
import "./header-style.css";


function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className='header-container'>
            <div className='header-content'>
                <nav className='header-nav'>
                    <h1 className='header-title'>menath.dev</h1>

                <button className='navbar-toggle' onClick={toggleMenu}>
                    &#9776;
                </button>


                {/* <div className='navbar-items'> */}
                <div className={`navbar-items ${showMenu ? 'show-menu': ''}`}>
                    <ul>
                        <li><button><a href="#">Home</a></button></li>
                        <li><button><a href="#">About</a></button></li>
                        <li><button><a href="#">Projects</a></button></li>
                        <li><button><a href="#">Blogs</a></button></li>
                    </ul>
                </div>

                </nav>
            </div>
        </header>

    );

}

export default Header;