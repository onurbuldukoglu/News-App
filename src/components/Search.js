/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = (props) => {
  const { queryFunction } = props;
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
            <button className="search-btn" type="button" aria-label="search"><FontAwesomeIcon icon="search" onClick={queryFunction} /></button>
          </form>
        )
        : <button className="toggle-btn" type="submit" aria-label="toggle-search"><FontAwesomeIcon icon="search" onClick={handleToggle} /></button>}
    </div>
  );
};

Search.propTypes = {
  queryFunction: PropTypes.func.isRequired,
};

export default Search;
