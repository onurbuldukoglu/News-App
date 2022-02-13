import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TopHeadlines from './components/TopHeadlines';

const categoryArray = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {categoryArray.map((category) => (
            <Route path={`/${category}`} element={<TopHeadlines category={category} />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
