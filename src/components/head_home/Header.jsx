import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="left__part">
                <span/>
                    <span className="logo__main">Obviously</span>
                    <span className="logo__main">best coctails</span>
                    <p className="logo__phrase">We work in every part of your town, check it</p>
                <span/>
                <div className="div__button">
                <button className="button__shop">Shop now</button>
                </div>
                <span/>
                <div className="icons">
                    <ul>
                        <li><button className="button__icon"><img src="https://img.icons8.com/ios-filled/20/000000/facebook-new.png"/></button></li>
                        <li><button className="button__icon"><img src="https://img.icons8.com/ios-filled/20/000000/twitter.png"/></button></li>
                        <li><button className="button__icon"><img src="https://img.icons8.com/ios-filled/20/000000/instagram-new--v1.png"/></button></li>
                    </ul>
                </div>
            </div>
            <div className="slider">
                <img className="coctail__img" src="https://i.pinimg.com/564x/3a/8e/a1/3a8ea14cefac2622de4a774fe5d02272.jpg"/>
            </div>
        </div>
    )
}

export default Header;