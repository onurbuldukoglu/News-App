/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = ['General', 'Business', 'Entertainment', 'Sports', 'Health', 'Science', 'Technology'];
  return (
    <div className="categories">
      {categories.map((category) => (
        <Link to={`/${category}`}>{category}</Link>
      ))}
    </div>
  );
};

export default Categories;
