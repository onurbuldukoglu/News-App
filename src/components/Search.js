/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useSearchParams } from 'react-router-dom';

const Search = (props) => {
  const { queryFunction } = props;
  const [showBar, setShowBar] = useState(false);
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleToggle = () => {
    setShowBar(true);
  };
  const handleQuery = () => {
    queryFunction(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newSearch = formData.get('search');
    setSearchParams({ search: newSearch });
  };

  return (
    <div className="search-div">
      {showBar
        ? (
          <form action={`/${input}`} onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" name="search" onInput={(e) => setInput(e.target.value)} />
            <button className="search-btn" type="submit" aria-label="search"><FontAwesomeIcon icon="search" onClick={handleQuery} /></button>
          </form>
        )
        : <button className="toggle-btn" type="button" aria-label="toggle-search" onClick={handleToggle}><FontAwesomeIcon icon="search" /></button>}
    </div>
  );
};

Search.propTypes = {
  queryFunction: PropTypes.func.isRequired,
};

export default Search;
