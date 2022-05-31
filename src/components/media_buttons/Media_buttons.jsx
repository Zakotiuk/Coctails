import React from "react";
import './Media_buttons.css'

const Media_buttons = () => {
    return (
        <div className="icons">
                    <ul>
                        <li><a target="_blank" href="https://uk-ua.facebook.com/"><button className="button__icon"><img src="https://img.icons8.com/ios-filled/20/000000/facebook-new.png"/></button></a></li>
                        <li><a target="_blank" href="https://twitter.com/"><button className="button__icon"><img src="https://img.icons8.com/ios-filled/20/000000/twitter.png"/></button></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/"><button className="button__icon"><img src="https://img.icons8.com/ios-filled/20/000000/instagram-new--v1.png"/></button></a></li>
                    </ul>
                </div>
    )
}

export default Media_buttons;