import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>OOPS!</h1>
      <br />
      <h2>Something went wrong!....</h2>
      <br />
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error;
