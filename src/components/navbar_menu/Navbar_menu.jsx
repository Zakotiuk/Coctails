import React, { useEffect, useState } from 'react'
import './Navbar_menu.css'

const Navbar_menu = ({setNewType, logo}) =>{
    const [lastElementId, setLastElementId] = useState();

    useEffect(()=>{
        setLastElementId(1);
    }, []);

    function setType(e){
        var text = e.target.text;
        setNewType(text);
        changeActive(e);
    }

    function changeActive(e){
        e.target.className = 'menu__item__active';
        document.getElementById(lastElementId).className = 'menu__item';
        setLastElementId(e.target.id);
    }

    return (
        <div className="navbar_menu">
            <a className="logo_menu">{logo}</a>
            <ul className="menu_filters">
                    <li>
                        <a id='1' onClick={setType} className="menu__item__active">Alcoholic</a>
                    </li>
                    <li>
                        <a id='2' className = ' menu__item' onClick={setType}>Non alcoholic</a>
                    </li>
                    <li>
                        <a id='3' className = ' menu__item' onClick={setType}>Optional alcohol</a>
                    </li>
            </ul>
        </div>
    )
}

export default Navbar_menu;