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
  const [mode, setMode] = useState('search');
  const [query, setQuery] = useState('london');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [inView, setInView] = useState(true);
  const handleInView = (s) => {
    setInView(s);
  };
  const handleQuery = (input) => {
    setMode('search');
    setQuery(input);
  };
  const handleCategory = (chosenCategory) => {
    setMode('category');
    setCategory(chosenCategory);
  };
  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };

  // if (mode === 'search') {
  //   useEffect(() => {
  //     fetch(`https://newsapi.org/v2/everything?q=${query}&page=${page}&language=en&sortBy=popularity&pageSize=24`)
  //       .then((res) => {
  //         if (res.ok) { return res.json(); }
  //         throw new Error('Something went wrong.');
  //       })
  //       .then(
  //         (result) => { setResults(result.articles); },
  //         (error) => error,
  //       );
  //   }, [query, page]);
  // } else if (mode === 'category') {
  //   useEffect(() => {
  //     fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=24`)
  //       .then((res) => {
  //         if (res.ok) { return res.json(); }
  //         throw new Error('Something went wrong.');
  //       })
  //       .then(
  //         (result) => { setResults(result.articles); },
  //         (error) => error,
  //       );
  //   }, [category, page]);
  // }

  return (
    <div>
      <Header view={inView} queryFunction={handleQuery} categoryFunction={handleCategory} />
      <Feed articles={results} viewFunc={handleInView} pageFunction={handlePage} />
    </div>
  );
};

export default App;
library.add(fas, fab, faSearch, faLinkedin, faGithubSquare, faUser, faBars, faArrowUp);
