import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import {food_list  } from '../assets/assets'

const Body = () => { 

const [listOfRestaurant, setListOfRestaurant] = useState(food_list);

  return (
    <div className='body'>
      <div className="filter">
        <button className='filter-btn' onClick={()=>{ 
          const filterResList = food_list.filter((res)=> res.rating>4)
          setListOfRestaurant(filterResList)          
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
            {listOfRestaurant.map((restaurant, index)=>{
            return <RestaurantCard key={index} resData={restaurant} />
            })}
          
      </div>
    </div> 
  )
}

export default Body
