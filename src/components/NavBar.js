import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "./common/Button";

const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1 id='brand'>
        <Link to='/'>BrainHive</Link>
      </h1>
      {/* <Button> */}
      <Link to='/add'>Contribute</Link>
      {/* </Button> */}
    </div>
  );
};

export default NavBar;
