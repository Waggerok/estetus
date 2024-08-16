import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Logos
import logo from '../img/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {

    const [menuIsOpen,setMenuIsOpen] = useState();

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <div className="header">
            <Link to='/main' className='header__logo'>
                <img src={logo} alt="logo"/>
                EstetusLab
            </Link>
            <nav className={`header__navbar ${menuIsOpen ? 'active' : ''}`}>
                <ul className='header__navbar_links'>
                    <li className="header__navbar_links-item">
                        <Link to='/services'>Услуги</Link>
                    </li>
                    <li className="header__navbar_links-item">
                        <Link to='/price'>Цены</Link>
                    </li>
                    <li className="header__navbar_links-item">
                        <Link to='/examples'>Портфолио</Link>
                    </li>
                    <li className="header__navbar_links-item">
                        <Link to='/contacts'>Контакты</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__button" onClick={toggleMenu}>
                <RxHamburgerMenu/>
            </div>
        </div>
    )
}

export default Navbar;