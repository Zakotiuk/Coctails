import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import './Menu.css'

const Menu = ({cocktails, type}) => {

    return (
        <div className="div__menu">
        <div className="menu_cards">
        {
            cocktails.slice(0, 5).map((item, index) =>
                <div className = {index === 0 ? 'first' : 'item'} key={index}>
                <img className= {index === 0 ? 'img_first' : 'img_item'} src={item.strDrinkThumb} alt="" />
                <span className= {index === 0 ? 'span_first' : 'span_item'}>~ {item.strDrink} ~</span>
                </div>
          )
        }
        </div>
        <button className="button__shop button_seeAll">Go to catalog</button>
        </div>
    )
}

export default Menu;