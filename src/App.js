/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas, faSearch, faUser, faBars, faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  fab, faLinkedin, faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import Header from './components/Header';
import Feed from './components/Feed';

const App = () => {
  const [query, setQuery] = useState('apple');
  const [results, setResults] = useState([]);
  const [inView, setInView] = useState(true);

  const handleInView = (s) => {
    setInView(s);
  };

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f61fd3b021fd49a38cda24a807671be9')
  //     .then((res) => res.json())
  //     .then((result) => setResults(result.articles));
  // }, [query]);

  return (
    <div>
      <Header view={inView} />
      <Feed articles={results} viewFunc={handleInView} />
    </div>
  );
};

export default App;
library.add(fas, fab, faSearch, faLinkedin, faGithubSquare, faUser, faBars, faArrowUp);
