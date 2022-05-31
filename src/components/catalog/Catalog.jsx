import React from 'react'
import './Catalog.css'
import {useNavigate} from 'react-router-dom'


const Catalog = ({cocktails}) =>{
    const router = useNavigate();

    return (
        <div className="catalog_cards">
        {
            cocktails.map((item, index) =>
                <div onClick={()=> router(`/catalog/${item.idDrink}`)} className = 'item' key={index}>
                        <img className= 'img_item' src={item.strDrinkThumb} alt="" />
                        <span className= 'span_item'>~ {item.strDrink} ~</span>
                </div>
          )
        }
        </div>
    )
}

export default Catalog;