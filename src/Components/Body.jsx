import React from 'react'
import RestaurantCard from './RestaurantCard'
import {food_list  } from '../assets/assets'

const Body = () => {

  console.log("food_list:", food_list); 
  return (
    <div className='body'>
      <div className="search">
        Search....
      </div>
      <div className="res-container">
            {food_list.map((restaurant, index)=>{
            return <RestaurantCard key={index} resData={restaurant} />
            })}
          
      </div>
    </div> 
  )
}

export default Body
