import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='navbar__logo' to='/main'>
                <img src={logo} alt="logo" />
                EstetusLab
            </Link>
            <div className="navbar__links">
                <ul>
                    <li>
                        <Link className='navbar__links_item' to='/services'>Услуги</Link>
                    </li>
                    <li>
                        <Link className='navbar__links_item' to='/contacts'>Цены</Link>
                    </li>  
                    <li>
                        <Link className='navbar__links_item' to='/examples'>Портфолио</Link>
                    </li>
                    <li>
                        <Link className='navbar__links_item' to='/contacts'>Контакты</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;