import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Menu.css'

const Menu = ({cocktails}) => {
    const router = useNavigate();

    return (
        <div className="div__menu">
        <div className="menu_cards">
        {
            cocktails.slice(0, 5).map((item, index) =>
                    <div onClick={()=> router(`/catalog/${item.idDrink}`)} className = {index === 0 ? 'first' : 'item'} key={index}>
                    <img className= {index === 0 ? 'img_first' : 'img_item'} src={item.strDrinkThumb} alt="" />
                    <span className= {index === 0 ? 'span_first' : 'span_item'}>~ {item.strDrink} ~</span>
                    </div>
          )
        }
        </div>
        <Link className="non-link-style" to="/catalog">
            <button className="button__shop button_seeAll">Go to catalog</button>
        </Link>
        </div>
    )
}

export default Menu;