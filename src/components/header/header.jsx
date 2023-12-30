import React from 'react';
import "./header-style.css";


function Header() {
    return (
        <header className='header-container'>
            <div className='header-content'>
                <nav className='header-nav'>
                    <h1 className='header-title'>menath.dev</h1>

                <div className='navbar-items'>
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