import axios from "axios";
import React from "react";

export default class CoctailsService{

static async getCoctails (type){
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='+type);
    console.log(response);
    return response.data.drinks;
}

static async getCoctailById (id){
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id);
    return response.data.drinks[0];
}

static async getRandomCoctail(){
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    console.log(response.data.drinks);
    return response.data.drinks[0];
}

static async getCoctailByName (name){
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+name);
    return response.data.drinks;
}

}