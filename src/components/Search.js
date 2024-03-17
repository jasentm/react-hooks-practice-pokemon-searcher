import React, {useState} from "react";

function Search({search, handleSearch}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
