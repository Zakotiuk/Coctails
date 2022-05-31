import React from "react";
import './DeliveryItem.css'

const DeliveryItem = () =>{
    return(
        <div id="delivery" className="div_delivery">
            <div className="div_facts">
                <span className="logo_menu logo_delivery">Delivery terms</span>
                <table className="table_facts">
                    <tbody>
                    <tr>
                        <td>—</td>
                        <td className="td_facts">We use the speediest delivery methods to ensure your goodies arrive in perfect condition to devour</td>
                    </tr>
                    <tr>
                        <td>—</td>
                        <td className="td_facts">Please allow between 2-3 working days from placing your order</td>
                    </tr>
                    <tr>
                        <td>—</td>
                        <td className="td_facts">All of our celebration cakes will be delivered to you on your chosen delivery date</td>
                    </tr>
                    <tr>
                        <td>—</td>
                        <td className="td_facts">Cocktails can be stored in the fridge for 5 hours</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <span/>
            <div>
            <img className="img_delivery" src="https://i.pinimg.com/564x/c2/33/4a/c2334a906059f4a82c6c6d023d4f3bd6.jpg" alt="" />
            </div>
        </div>
    )
}

export default DeliveryItem;