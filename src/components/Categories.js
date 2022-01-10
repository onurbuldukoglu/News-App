/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Categories = () => {
  const categories = ['General', 'Business', 'Entertainment', 'Sports', 'Health', 'Science', 'Technology'];
  return (
    <div className="categories">
      {categories.map((category) => (
        <a href="#">{category}</a>
      ))}
    </div>
  );
};

export default Categories;
