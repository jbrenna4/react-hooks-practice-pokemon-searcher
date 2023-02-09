import React from "react";

function Search({onChange, searchTerm}) {

    function handleChange(event) {
      onChange(event.target.value);
    }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;