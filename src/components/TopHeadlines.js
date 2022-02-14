/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';
import Header from './Header';
import Feed from './Feed';

const TopHeadlines = (props) => {
  const { category } = props; // category prop is set through the paths in index.js
  const [results, setResults] = useState([]);
  const [topic, setTopic] = useState(category);
  const [inView, setInView] = useState(true);
  const handleInView = (s) => {
    setInView(s);
  };
  useEffect(() => {
    setTopic(category);
    console.log(topic);
  }, [category]);
  // useEffect(() => {
  //   fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=f61fd3b021fd49a38cda24a807671be9&page=1`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setResults(result.articles);
  //     });
  // }, [category]);
  return (
    <div>
      <Header view={inView} />
      { /* Returns feed component with the articles fetched from the api */ }
      <Feed articles={results} viewFunc={handleInView} />
    </div>
  );
};

TopHeadlines.propTypes = {
  category: PropTypes.string.isRequired,
};

export default TopHeadlines;
