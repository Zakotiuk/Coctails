import React from 'react'
import { Link as Link_Scroll} from 'react-scroll/modules';
import Media_buttons from '../media_buttons/Media_buttons';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="left__part">
                <span/>
                    <span className="logo__main">Obviously</span>
                    <span className="logo__main">best cocktails</span>
                    <p className="logo__phrase">We work in every part of your town, check it</p>
                <span/>
                <div className="div__button">
                <Link_Scroll to='form_order' smooth='true' duration={2000}> <button className="button__shop button_header field">Shop now</button></Link_Scroll>
                </div>
                <span/>
                <Media_buttons/>
            </div>
            <div className="div_image">
                <img className="coctail__img" src="https://i.pinimg.com/564x/3a/8e/a1/3a8ea14cefac2622de4a774fe5d02272.jpg"/>
            </div>
        </div>
    )
}

export default Header;