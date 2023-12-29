import React from 'react';
import "./header-style.css";

function Header() {
    return (
        <header className='header-container'>
            <div className='header-content'>
                <h1 className='header-title'>menath.dev</h1>
                <nav className='header-nav'>

                    <div className='nav-item'>
                        <button><a href="#">Home</a></button>
                    </div>
                    <div className='nav-item'>
                        <button><a href="#">About</a></button>
                    </div>
                    <div className='nav-item'>
                        <button><a href="#">Projects</a></button>
                    </div>
                    <div className='nav-item'>
                        <button><a href="#">Blogs</a></button>
                    </div>
                    
                </nav>
            </div>
        </header>

    );

}

export default Header;