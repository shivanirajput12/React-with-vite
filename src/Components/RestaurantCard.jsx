import React from 'react'
import { CDN_URL } from '../utils/Constants';

const RestaurantCard = (props) => {
  const {resData}= props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo
,
    deliveryTime,
  } = resData;
  console.log(name);
  return (  
    <div className='res-card' style={{backgroundColor:'#f1f1f1'}}>
      <img className='res-logo' src={CDN_URL+ cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard;
