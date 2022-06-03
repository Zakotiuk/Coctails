import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = ({text}) => {
    return (
        <div className="navigation_div">
                    <Link className="non-link-style navigation_span" to="/">Home</Link>
                    <span className="navigation_span">&gt;</span>
            {
                text == "" 
                    ? 
                        <Link className="non-link-style navigation_span" to="/catalog">Catalog</Link>
                    :   
                <div style={{marginTop : 20 + 'px'}}>
                    <Link className="non-link-style navigation_span" to="/catalog">Catalog</Link>
                    <span className="navigation_span">&gt;</span>
                    <Link className="non-link-style navigation_span" to="">{text}</Link>
                </div>
            }

        </div>
    )
}

// DotLoader  PuffLoader RingLoader

export default Navigation;