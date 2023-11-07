

import React, { useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons';
import "./Navbar.css"
function Navbar() {
  const [searchParams,setSearchParams]=useSearchParams()
  const [query,setQuery]=useState(searchParams.get("query")||"")
const location=useLocation()

// handling searching system
const handlesearch=()=>{
  const obj={

  }
query?(obj.query=query):(obj.query="avatar")

  setSearchParams(obj)
}


  return (
    <nav className="navbar">
      <div className="container">
        <span className="text">pkMovies</span>
        <div className='inputcontainer' >
        <input
          className="input"
          value={query}
          type="text"
          placeholder="Search for movies..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button ml="10px" className="button" onClick={handlesearch}><Search2Icon /></button></div>
      </div>
    </nav>
  );
}

export default Navbar;

