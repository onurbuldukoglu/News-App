/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Search = (props) => {
  const { queryFunction } = props;
  const [showBar, setShowBar] = useState(false);
  const [input, setInput] = useState('');
  const handleToggle = () => {
    setShowBar(true);
  };
  const handleQuery = () => {
    queryFunction(input);
  };
  return (
    <div className="search-div">
      {showBar
        ? (
          <Link to={`/?query=${input}`}>
            <form>
              <input type="text" placeholder="Search" onInput={(e) => setInput(e.target.value)} />
              <button className="search-btn" type="submit" aria-label="search"><FontAwesomeIcon icon="search" onClick={handleQuery} /></button>
            </form>
          </Link>
        )
        : <button className="toggle-btn" type="button" aria-label="toggle-search" onClick={handleToggle}><FontAwesomeIcon icon="search" /></button>}
    </div>
  );
};

Search.propTypes = {
  queryFunction: PropTypes.func.isRequired,
};

export default Search;
