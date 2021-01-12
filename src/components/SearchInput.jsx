import React, { useState } from "react";

export function SearchInput(props) {
  const [location, setLocation] = useState("");

  function onInputChange(e) {
    setLocation(e.target.value)    
  };

  function onFormSubmit(e) {
    e.preventDefault();
    // invoking a function
    // passing that function through as props
    // lifting state
    props.setQuery(location);
  };

  return (
    <form className="search-input" onSubmit={onFormSubmit}>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Sydney"
        value={location}
        onChange={onInputChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
