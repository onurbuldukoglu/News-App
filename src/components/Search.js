/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  const [showBar, setShowBar] = useState(false);
  const handleToggle = () => {
    setShowBar(true);
  };
  return (
    <div className="search-div">
      {showBar
        ? (
          <form>
            <input type="text" placeholder="Search" />
            <button className="search-btn" type="submit" aria-label="search"><FontAwesomeIcon icon="search" /></button>
          </form>
        )
        : <button className="toggle-btn" type="submit" aria-label="toggle-search"><FontAwesomeIcon icon="search" onClick={handleToggle} /></button>}
    </div>
  );
};

export default Search;
