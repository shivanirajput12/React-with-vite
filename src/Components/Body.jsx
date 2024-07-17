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
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

//Conditional Rendering-page render on the bases of some condition
  return (
    <>
    {listOfRestaurant && listOfRestaurant.length===0 ? <Shimmer/>:(
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
          <button className='search-btn' onClick={()=>{ 
            const filteredRes = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRes(filteredRes);
          }
          
          } >Search</button>
        </div>
        <button className='filter-btn' onClick={()=>{ 
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRes(filteredList);        
        }}>
          Top Rated Restaurant
        </button>
      </div>  
      <div className="res-container">
            {filteredRes?.map((restaurant)=>(
           <RestaurantCard key={restaurant.info.id} resData={restaurant
            .info} />
            ))}         
      </div>
    </div> 
  )
}
    </>
  )
}

export default Body;
