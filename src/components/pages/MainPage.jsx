import React, { useEffect, useState } from "react";
import Circle_elements from "../circle_element/Circle_element";
import Form_order from "../form_order/Form_order";
import Header from "../head_home/Header";
import Head_Menu from "../navbar_menu/Navbar_menu";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useFetching } from "../../hooks/useFetching";
import CoctailsService from "../../services/CoctailsServices";
import { getPagesArray } from "../../utils/Pages";
import { getFive } from "../../utils/GetFive";

const MainPage = () => {
    let logo_adv = "Our advantages";
    let logo_brm = "Our barmen";
    let phrases = ["High quality", "Decoration", "Fast delivery"];
    let images_adv = ["https://i.pinimg.com/564x/cd/5b/41/cd5b41ff8d0702e062eafdee9420e902.jpg",
                  "https://i.pinimg.com/564x/81/c8/91/81c891113f09f4f6cc22a2679a1eff55.jpg",
                  "https://i.pinimg.com/564x/62/fd/e4/62fde4aae134b58eaa947a91c41ef9a0.jpg"];
    
    let images_brm = ["https://i.pinimg.com/236x/8a/0d/4b/8a0d4b91252652b65af9deb24ba37aeb.jpg",
                      "https://i.pinimg.com/236x/a5/8d/b9/a58db9a4169624b25fb5bb7a362e7733.jpg",
                      "https://i.pinimg.com/236x/d9/cb/48/d9cb4827c2668e0fc9a18030746d876e.jpg"];

    let advantage = {
        images : ["https://i.pinimg.com/564x/cd/5b/41/cd5b41ff8d0702e062eafdee9420e902.jpg",
                 "https://i.pinimg.com/564x/81/c8/91/81c891113f09f4f6cc22a2679a1eff55.jpg",
                 "https://i.pinimg.com/564x/62/fd/e4/62fde4aae134b58eaa947a91c41ef9a0.jpg"],
        pharses : ["High quality", "Decoration", "Fast delivery"]
    }

    const [alcoholCock, setAlcoholCock] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState([])
    const [type, setType] = useState(['Alcoholic'])

    const [fetching, isLoading, error] = useFetching(async()=> {
        const response = await CoctailsService.getCoctails(type);
        setAlcoholCock(response);
        setTotalPage(getPagesArray(5));
    })

    function setNewType (value) {
        setType(value);
        console.log(value);
    }

    useEffect(()=>{
        fetching();
    },[type]);

    
    return (
        <div>
        <div className="container">
            <Navbar/>
            <Header/>
            <Head_Menu setNewType={setNewType}/>
            <Menu cocktails={alcoholCock}/>
            <Circle_elements images={images_adv} pharses={phrases} logo={logo_adv} elements = {advantage}/>
            <Form_order></Form_order>
            <Circle_elements images={images_brm} pharses={phrases} logo={logo_brm} elements = {advantage}/>
        </div>
            <Footer/>
        </div>

    )
}

export default MainPage;