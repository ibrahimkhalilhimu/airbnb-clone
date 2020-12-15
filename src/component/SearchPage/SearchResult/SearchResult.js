import  StarIcon  from '@material-ui/icons/Star';
import  FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import './SearchResult.css'
const SearchResult = ({img,location,description,price,title,star,total}) => {
    return (
        <div className="searchResult">
           <img src={img} alt=""/> 
           <FavoriteBorderIcon
           className="searchResult_heart"
           />
           <div className="searchResult_info">
               <div className="searchResult_infoTop">
                   <p>{location}</p>
                   <h3>{title}</h3>
                   <p>____</p>
                   <p>{description}</p>
               </div>
               <div className="searchResult_infoBottom">
                   <div className="searchResult_stars">
                       <StarIcon className="SearchResult_star"
                       />
                       <p>
                           <strong>{star}</strong>
                       </p>
                   </div>
                   <div className="searchResult_price">
                   <h2>{price}</h2>
                        <p>{total}</p>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default SearchResult;