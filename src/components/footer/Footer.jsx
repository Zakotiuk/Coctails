import React from "react";
import DeliveryItem from "../delivery/DeliveryItem";
import Media_buttons from "../media_buttons/Media_buttons";
import './Footer.css'
import { Link as Link_Scroll} from 'react-scroll/modules';

const Footer = () => {
    return (
        <div className="footer">
            <DeliveryItem/>


            <div className="div_footer">
                <table style={{width : 100 + '%'}}>

                    <thead>
                        <tr>
                        <th className="th_footer">Coctails</th>
                        <th className="th_footer" style={{paddingLeft : 4 + 'px'}}>Menu</th>
                        <th className="th_footer">Contacts</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td width={27 + '%'}>
                            <Media_buttons/>
                        </td>

                        <td width={45 + '%'}>
                        <table width={100 + '%'}>
                        <tbody>
                        <tr>
                            <td className="td_in_2_table footer_item">Home</td>
                            <td className="td_in_2_table footer_item">Our team</td>
                            <td className="td_in_2_table footer_item"><Link_Scroll to='form_order' smooth='true' duration={1000}>How to order</Link_Scroll></td>
                        </tr>
                        <tr>
                            <td className="footer_item">Catalog</td>
                            <td className="footer_item">Delivery</td>
                        </tr>
                        </tbody>
                        </table>
                        </td>

                        <td>
                            <ul className="ul_contacts">
                                <li className="li_number">+38(098)7637932</li>
                                <li>cocktails@gmail.com</li>
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                </table>

            </div> 
        </div>
    )
}

export default Footer;