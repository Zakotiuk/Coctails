import React from "react";
import './Circle_element.css'


const Circle_elements = (props) => {
    return (
        <div id={ props.logo == "Our barmen" ? 'barmen' : 'cocktail' } className="div_circle">
        <span className="logo_menu">{props.logo}</span>
        <div className="circle_menu">
            {
                props.elements.map((item, index) => 
                    <div key={index} className="circle_element">
                        <img className="circle" src={item.image} alt="" />
                        <span className="circle_logo"><b>{item.text}</b></span>
                        <span className="circle_skils">{item.skils}</span>
                    </div>
                )
            }
        </div>
    </div>
    )
}

export default Circle_elements;