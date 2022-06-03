import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import Catalog from "../catalog/Catalog";
import MyLoader from "../loader/Loader";
import Navbar_menu from "../navbar_menu/Navbar_menu";
import Navigation from "../navigation/Navigation";
import Pagination from "../Pagination/Pagination";

const CatalogPage = () =>{
    const [type, setType] = useState(['Alcoholic'])
    const params = useParams()
    const [cocktails, setCocktails] = useState([])


    const [fetching, isLoading, error] = useFetching(async()=> {
        let response = await CoctailsService.getCoctails(type);;
        if(params.name !== undefined)
        {
            response = await CoctailsService.getCoctailByName(params.name);
            console.log(params.name);
        }
        setCocktails(response);
    })

    function setNewType (value) {
        setType(value);
        setCurrentPage(1);
    }

    useEffect(()=>{
        fetching();
    },[type, params.name]);


    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(16);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentCocktails = cocktails.slice(indexOfFirstPost, indexOfLastPost);



    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
                <Navigation text={""}/>
            {
                params.name == undefined ?
                <Navbar_menu logo={"Catalog"} setNewType={setNewType}/>
                : <span></span>
            }

            {
                cocktails == null ?
                <h1>Sorry, we don't have cocktail, that you search</h1>
                :

                <div>
                {
                    isLoading 
                    ?
                            <MyLoader></MyLoader>
                    :
                            <Catalog 
                                    cocktails={currentCocktails}
                            ></Catalog>
                }
            </div>
            }
                <Pagination page={currentPage} paginate={paginate} postsPerPage={postsPerPage} totalPosts={cocktails.length}></Pagination>
        </div>
    )
}

export default CatalogPage;