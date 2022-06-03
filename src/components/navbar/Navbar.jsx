import React, { useState } from 'react'
import './Navbar.css'
import { push as Menu } from 'react-burger-menu'
import { Link, useNavigate } from 'react-router-dom';
import { Link as Link_Scroll} from 'react-scroll/modules';

const Navbar = () =>{

    const router = useNavigate();
    const [searchLine, setSearchLine] = useState('');

    return (
            <div id='navbar' className="navbar container">
               <Link className="logo non_link_style" to='/'>Cocktails</Link>

                <div className="burger__menu">
                    <Menu right>
                        <Link className="menu-item non_link_style" to='/'>Home</Link>
                        <Link className="menu-item non_link_style" to="/catalog">Catalog</Link>
                        <Link className="menu-item non_link_style" to="/catalog">How to order</Link>
                        <a className="menu-item non_link_style" href="/about">Delivery</a>
                        <a className="menu-item non_link_style" href="/about">Contacts</a>
                    </Menu>
                </div>

                <ul className="menu">
                    <li>
                        <Link className="menu__item non_link_style" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="menu__item non_link_style" to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link_Scroll to='form_order' smooth='true' duration={2000} className="menu__item">How to order</Link_Scroll> 
                    </li>
                    <li>
                        <Link_Scroll to='delivery' smooth='true' duration={2500} className="menu__item">Delivery</Link_Scroll>
                    </li>
                    <li>
                        <Link_Scroll to='delivery' smooth='true' duration={3000} className="menu__item">Contacts</Link_Scroll>
                    </li>
                </ul>

                <span/>
                <div className="search">
                    <input onChange={ (e)=>{setSearchLine(e.target.value)}} placeholder="Enter name..." className="input__search" type="text"/>
                    <img onClick={()=> router(`/catalog/search/${searchLine}`)} className='icon_search' src="https://img.icons8.com/ios/30/000000/search--v1.png"/>
                </div>
            </div>
    );
}

export default Navbar;