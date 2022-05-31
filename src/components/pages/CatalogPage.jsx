import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import Catalog from "../catalog/Catalog";
import Navbar_menu from "../navbar_menu/Navbar_menu";
import Navigation from "../navigation/Navigation";

const CatalogPage = () =>{

    const [alcoholCock, setAlcoholCock] = useState([])
    const [type, setType] = useState(['Alcoholic'])

    const [fetching, isLoading, error] = useFetching(async()=> {
        const response = await CoctailsService.getCoctails(type);
        setAlcoholCock(response);
    })

    function setNewType (value) {
        setType(value);
    }

    useEffect(()=>{
        fetching();
    },[type]);


    return (
        <div className="container">
            <Navigation text={""}/>
            <Navbar_menu logo={"Catalog"} setNewType={setNewType}/>
            <Catalog cocktails={alcoholCock}></Catalog>
        </div>
    )
}

export default CatalogPage;