import React from "react";
import { BeatLoader } from "react-spinners";
import './Loader.css'

const MyLoader = () => {
    var color = "rgb(187, 5, 58)"
    return(
        <div className="loader">
            <BeatLoader color={color} loading="true" size={60}></BeatLoader>
        </div>
    );
}

export default MyLoader;