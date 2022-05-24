import React from "react";
import './Form_order.css'

const Form_order = () =>{
    return(
        <div className="div_form_order">
            <img className="image" src="https://img.wallpapic.com/i5756-333-917/thumb/bokal-dlya-vina-napitki-krasnoe-vino-steklo-oboi.jpg" alt="" />
            <div className="div_with_form">
            <span className="logo_menu">Hot to order</span>
            <p className="paragraph">Please leave your contact information and we will get back to you in 20 minutes</p>
            <form className="form">
                <input className="inputs" placeholder="Name" type="text"/>
                <input className="inputs" placeholder="Phone" type="text"/>
                <button className="button__shop">Ok</button>
            </form>
            </div>
        </div>
    )
}

export default Form_order;