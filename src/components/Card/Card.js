import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const Card = ({info}) => {
    console.log(info)
  
    return (
        <div className='card'>
            <img src={info?.show?.image?.original} alt=""/>
            <Link to={`/details/${info?._id}`}><button className="watch-more rounded-full text-xs text-white font-semibold px-3 py-2 mt-5 mb-7">
          Watch more
        </button></Link>
        </div>
    );
};

export default Card;