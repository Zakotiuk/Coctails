import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import MyLoader from "../loader/Loader";
import './Menu.css'

const Menu = ({type}) => {
    const router = useNavigate();
    const color = "rgb(187, 5, 58)"
    const [cocktails, setAlcoholCock] = useState([])

    const [fetching, isLoading, error] = useFetching(async()=> {
        const response = await CoctailsService.getCoctails(type);
        setAlcoholCock(response);
    })

    useEffect(()=>{
        fetching();
    },[type]);

    return (
        <div className="div_menu">
             {
            isLoading ?
                    <div className="div_loader">
                        <BeatLoader color={color} loading="true" size={60}></BeatLoader>
                    </div>
                :
                <div>
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
             }
        </div>
    )
}

export default Menu;