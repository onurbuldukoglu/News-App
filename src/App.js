/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas, faSearch, faUser, faBars, faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  fab, faLinkedin, faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Feed from './components/Feed';

const App = (props) => {
  const { urlQuery } = props;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [inView, setInView] = useState(true);
  const handleInView = (s) => {
    setInView(s);
  };
  const handleQuery = (input) => {
    setQuery(input);
    console.log(query);
  };
  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/everything?q=london&page=1&apiKey=f61fd3b021fd49a38cda24a807671be9')
  //     .then((res) => {
  //       if (res.ok) { return res.json(); }
  //       throw new Error('Something went wrong.');
  //     })
  //     .then(
  //       (result) => { setResults(result.articles); },
  //       (error) => error,
  //     )
  //     .then(console.log(results));
  // });

  return (
    <div>
      <Header view={inView} queryFunction={handleQuery} />
      <Feed articles={results} viewFunc={handleInView} />
    </div>
  );
};

App.propTypes = {
  urlQuery: PropTypes.string.isRequired,
};

export default App;
library.add(fas, fab, faSearch, faLinkedin, faGithubSquare, faUser, faBars, faArrowUp);
