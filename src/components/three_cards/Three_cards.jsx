import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import './Three_cards.css'

const Three_Cards = ({type, changing}) =>{
    const [cocktail, setCocktail] = useState([])
    const max = type == "Optional alcohol" ? 6 : 53;
    const [random, setRandom] = useState();
    const router = useNavigate();
    
    const [fetching, isLoading, error] = useFetching( async ()  =>
        {
            const response = await CoctailsService.getCoctails(type);
            setCocktail(response);
        }
    )

    useEffect(()=>{
        fetching();
        setRandom(Math.floor((Math.random() * max) + 1));        
    }, [type]);

    return(
        <div>
        <span className="span_text"><b>You might also like</b></span>
        <div className="div_three_cards">
            {
                cocktail.slice(random, random+3).map((item, index)=>
                    <div key={index} onClick={()=> {changing(true); router(`/catalog/${item.idDrink}`);}} className="card">
                        <img className="card_image" src={item.strDrinkThumb} alt="" />
                        <span className="card_span">~ {item.strDrink} ~</span>
                    </div>
                )
            }
        </div>
        </div>
    )
}

export default Three_Cards;