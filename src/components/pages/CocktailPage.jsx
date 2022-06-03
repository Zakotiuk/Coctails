import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import MyLoader from "../loader/Loader";
import Navigation from "../navigation/Navigation";
import './CocktailPage.css'

const CocktailPage = () => {
    const params = useParams();
    const [cocktail, setCocktail] = useState([]);
    const [cock, setCock] = useState([]);


    const [fetching, isLoading, error] = useFetching(async()=> {
        const response = await CoctailsService.getCoctailById(params.id);
        setCocktail(response);
        response = await CoctailsService.getCoctails('Alcoholic');
        setCock(response)
    }   
    )

    useEffect(()=>{
        fetching();
    }, []);

    return (
        <div className="container">
            {
            isLoading ?
                    <MyLoader></MyLoader>
                : 
                <div>
        <Navigation text={cocktail.strDrink}></Navigation>
        <div className="cocktail_div">
            <img className="cocktail_img" src={cocktail.strDrinkThumb}/>
            <div className="cockatail_info_div">
                <span className="logo cocktail_logo">{cocktail.strDrink}</span>
                <span>{cocktail.strTags}</span>
                <span className="cocktail_instruction"><b>Intsruction : </b>{cocktail.strInstructions}</span>
                <Link className="non_link_style" to='/'><button className="button__shop cocktail_btn">Shop now</button></Link>
            </div>
        </div>
        {/* <Three_Cards cocktails={cock} type={cocktail.strAlcoholic}></Three_Cards> */}
        </div>
                }
        </div>
    )
}

export default CocktailPage;