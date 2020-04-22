import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1 id='brand'>
        <Link to='/'>BrainHive</Link>
      </h1>
      <div id='navigation'>
        <Link to='/add'>Contribute</Link>
      </div>
    </div>
  );
};

export default NavBar;
