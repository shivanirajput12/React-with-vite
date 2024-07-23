import React from "react";
import { CDN_URL } from "../utils/Constants";

const ItemList = ({ items, dummy }) => {
  console.log(dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b border-gray-200 flex justify-between text-left"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-10 rounded-md bg-black text-white text-sm shadow-lg absolute">
                Add+
              </button>
            </div>
            <img
              className="w-full"
              src={CDN_URL + item.card.info.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
