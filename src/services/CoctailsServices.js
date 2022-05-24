import axios from "axios";
import React from "react";

export default class CoctailsService{

static async getCoctails (type){
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='+type);
    return response.data.drinks;
}
}