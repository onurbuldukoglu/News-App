import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = (props) => {
  const { queryFunction } = props;
  const [showBar, setShowBar] = useState(false);
  const [input, setInput] = useState('');

  const handleToggle = () => {
    setShowBar(true);
  };

  const handleSubmit = () => {
    queryFunction(input);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="search-div">
      {showBar
        ? (
          <div>
            <input type="text" placeholder="Search" name="search" onInput={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} autoComplete="off" />
            <button className="search-btn" type="submit" aria-label="search" onClick={handleSubmit}><FontAwesomeIcon icon="search" /></button>
          </div>
        )
        : <button className="toggle-btn" type="button" aria-label="toggle-search" onClick={handleToggle}><FontAwesomeIcon icon="search" /></button>}
    </div>
  );
};

Search.propTypes = {
  queryFunction: PropTypes.func.isRequired,
};

export default Search;
