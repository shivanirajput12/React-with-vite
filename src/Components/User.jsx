import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1, setCount] = useState(0);

  useEffect(() => {
    //api call
    const timer = setInterval(() => {
      console.log("hello timer,1000");
    }, 1000);
    console.log("useEffect ");
    return () => {
      //it will call when you are unmounting it (remove it)
      clearInterval(timer);
      console.log("useEffect rerturn ");
    };
  }, []);
  console.log("render");

  return (
    <div className="user">
      <h1>Count - {count}</h1>
      <h1>Count - {count1}</h1>
      <button onClick={() => setCount(count1 + 1)}>increase count</button>

      <h2>Name - {name}</h2>
      <h3>Location - Bhopal</h3>
      <h4>Contact - shivani12 </h4>
    </div>
  );
};

export default User;
