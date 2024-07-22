import React from "react";
import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[300px] h-[500px] bg-gray-200 rounded-lg">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} </h4>
    </div>
  );
};

export default RestaurantCard;
