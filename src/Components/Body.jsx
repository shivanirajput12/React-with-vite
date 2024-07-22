import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline , please connect your internet.</h1>;
  }
  //Conditional Rendering-page render on the bases of some condition
  return (
    <>
      {listOfRestaurant && listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter flex">
            <div className="search m-4 p-4 ">
              <input
                type="text"
                className="border border-solid border-black rounded-md"
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
              />
              {/* filter the restaurant cards and update the UI*/}
              {/* search-text needs us */}
              <button
                className="px-4 py-1 m-4 bg-green-400 rounded-lg"
                onClick={() => {
                  const filteredRes = listOfRestaurant.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRes(filteredRes);
                }}
              >
                Search
              </button>
            </div>
            <div className="flex items-center">
              <button
                className="px-4 py-1 bg-gray-300 rounded-lg"
                onClick={() => {
                  const filteredList = listOfRestaurant.filter(
                    (res) => res.info.avgRating > 4.5
                  );
                  setFilteredRes(filteredList);
                }}
              >
                Top Rated Restaurant
              </button>
            </div>
          </div>
          <div className="flex flex-wrap pl-3">
            {filteredRes?.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant.info} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
