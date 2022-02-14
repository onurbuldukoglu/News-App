/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {
  const { categoryFunction } = props;
  const categories = ['General', 'Business', 'Entertainment', 'Sports', 'Health', 'Science', 'Technology'];

  const handleCategory = (event) => {
    categoryFunction(event.target.textContent);
  };

  return (
    <div className="categories">
      {categories.map((category) => (
        <button key={category} type="button" onClick={handleCategory}>{category}</button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categoryFunction: PropTypes.func.isRequired,
};

export default Categories;
