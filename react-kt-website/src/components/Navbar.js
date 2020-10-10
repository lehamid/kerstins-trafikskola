import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="kt_logo.png" alt="kt_logo" width="100" height="40"></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/startsida' className='nav-links' onClick={closeMobileMenu}>
                                Startsida
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ta-korkort' className='nav-links' onClick={closeMobileMenu}>
                                Ta körkort
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/logga-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Logga in
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOGGA IN</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
