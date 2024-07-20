import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/Constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li>
            <Link className="my-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="my-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="my-link" to="/contact">
              Contact
            </Link>
          </li>

          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnName("logout");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
