import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--white bg-lightest-grey br3 placeholder-font"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
