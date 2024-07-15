import React from 'react'

const RestaurantCard = (props) => {
  const {resData}= props;
  console.log(props);
  const {name, image, price, rating, description, category} = resData; 
  return (
      
    <div className='res-card' style={{backgroundColor:'#f1f1f1'}}>
      <h3>{name}</h3>
      <img src={image}/>
      <h4>{price}</h4>
      <h4>{rating}</h4>
      <h4>{description}</h4>
      <h4>{category}</h4>
    </div>
  )
}

export default RestaurantCard;
