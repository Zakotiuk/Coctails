import React from "react";
import MyLoader from "../loader/Loader";
import './Pagination.css'

const Pagination = ({postsPerPage, totalPosts, paginate, page})=> {
    const pageNumbers = [];

    for(let i =1; i<= Math.ceil(totalPosts/postsPerPage);++i){
        pageNumbers.push(i);
    }
    return(
        <div>
                {
                    pageNumbers.length !== 1 &&
                    <div className="div_pagination"> 
                        {
                            pageNumbers.map(number=> 
                                <button key={number} onClick={() => paginate(number)} className={page === number ? 'pgn_button pgn_active': 'pgn_button'}>{number}</button>
                            )
                        }
                    </div>
                }
                
        </div>
    )
}

export default Pagination;