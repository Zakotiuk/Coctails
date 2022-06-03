import React from "react";
import './Circle_element.css'


const Circle_elements = (props) => {
    return (
        <div id={ props.logo == "Our barmen" ? 'barmen' : 'cocktail' } className="div_circle">
        <span className="logo_menu">{props.logo}</span>
        <div className="circle_menu">
            {
                props.images.map((item, index) => 
                    <img className="circle" src={item} key={index} alt="" />
                )
            }
        </div>
    </div>
    )
}

export default Circle_elements;