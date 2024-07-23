import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/Constants";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md m-2">
      <div className="logo-container">
        <img className="w-12 m-5" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-3 m-5 ">
          <li className="px-4 hover:text-red-500">
            Online Status: {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-4 font-bold  hover:text-red-500">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>

          <button
            className="login px-4 bg-green-400 py-1 rounded-lg"
            onClick={() => {
              setBtnName("logout");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
