import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import './Three_cards.css'

const Three_Cards = ({type}) =>{
    const [cocktail, setCocktail] = useState([])
    const [fetching, isLoading, error] = useFetching( async ()  =>
        {
            const response = await CoctailsService.getCoctails(type);
            setCocktail(response);
        }
    )
    useEffect(()=>{
        fetching();
    }, [type]);

    return(
        <div>
            {
                cocktail.slice(4, 7).map((item, index)=>
                <img className="circle" key={index} src={item.strDrinkThumb} alt="" />
                )
            }
        </div>
    )
}

export default Three_Cards;