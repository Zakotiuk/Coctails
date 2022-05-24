import React from 'react'
import './Navbar.css'
import { push as Menu } from 'react-burger-menu'

const Navbar = () =>{

    return (
            <div className="navbar">
                <a className="logo">Cocktails</a>

                <div className="burger__menu">
                    <Menu right>
                        <a className="menu-item" href="/">Home</a>
                        <a className="menu-item" href="/about">Catalog</a>
                        <a className="menu-item" href="/contact">How to order</a>
                        <a className="menu-item" href="/about">Delivery</a>
                        <a className="menu-item" href="/about">Contacts</a>
                    </Menu>
                </div>

                <ul className="menu">
                    <li>
                        <a className="menu__item">Home</a>
                    </li>
                    <li>
                        <a className="menu__item">Catalog</a>
                    </li>
                    <li>
                        <a className="menu__item">How to order</a>
                    </li>
                    <li>
                         <a className="menu__item">Delivery</a>
                    </li>
                    <li>
                        <a className="menu__item">Contacts</a>
                    </li>
                </ul>

                <span/>
                <div className="search">
                    <input placeholder="Search..." className="input__search" type="text"/>
                    <img src="https://img.icons8.com/ios/30/000000/search--v1.png"/>
                </div>
            </div>
    );
}

export default Navbar;