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
                        <button><li><a href="#">Home</a></li></button>
                        <button><li><a href="#">About</a></li></button>
                        <button><li><a href="#">Projects</a></li></button>
                        <button><li><a href="#">Blogs</a></li></button>
                    </ul>
                </div>


                </nav>
            </div>
        </header>

    );

}

export default Header;