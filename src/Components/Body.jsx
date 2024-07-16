import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';

const Body = () => { 

const [listOfRestaurant, setListOfRestaurant] = useState([]);
const [searchText,setSearchText] = useState("");
const [filteredRes, setFilteredRes] = useState([])

useEffect(()=>{
  fetchData();
},[])

const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0929054&lng=77.51822899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

  return (
   <div>
    {listOfRestaurant && listOfRestaurant.length === 0 ? (
      <Shimmer />
    ):(

    <div className='body'>
      <div className="filter">
        <div className="search">
          <input 
          type="text" 
          className='search-box' 
          value={searchText} 
          onChange={(event)=>{
          setSearchText(event.target.value)
          }}/>
          {/* filter the restaurant cards and update the UI*/}
          {/* search-text needs us */}
          <button onClick={()=>{ 
            console.log(searchText);
            const filteredRes = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))

            setListOfRestaurant(filteredRes);
          }
          
          } >Search</button>
        </div>
        <button className='filter-btn' onClick={()=>{ 
          const filterResList = listOfRestaurant.filter((res)=> res.info.avgRating>4)
          setFilteredRes(filterResList)          
        }}>
          Top Rated Restaurant
        </button>
      </div>  
      <div className="res-container">
            { filteredRes?.map((restaurant)=>(
           <RestaurantCard key={restaurant.info.id} resData={restaurant
            .info} />
            ))}         
      </div>
    </div> 
    )}
  </div>
)
}

export default Body
