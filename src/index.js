/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Search from './components/Search';
import TopHeadlines from './components/TopHeadlines';

const categoryArray = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/business" element={<TopHeadlines category="business" />} />
        <Route path="/entertainment" element={<TopHeadlines category="entertainment" />} />
        <Route path="/general" element={<TopHeadlines category="general" />} />
        <Route path="/health" element={<TopHeadlines category="health" />} />
        <Route path="/science" element={<TopHeadlines category="science" />} />
        <Route path="/sports" element={<TopHeadlines category="sports" />} />
        <Route path="/technology" element={<TopHeadlines category="technology" />} />

        {/* map on categoryArray did not work. Try to find out why */}
        {/* {categoryArray.map((category) => (
          <Route path={`/${category}`} element={<TopHeadlines category="business" />} />
        ))} */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
