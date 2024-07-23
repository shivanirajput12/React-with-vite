import { Outlet } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name: "shivani rajput",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
