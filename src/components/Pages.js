import React from 'react';
import PropTypes from 'prop-types';

const Pages = (props) => {
  const { pageFunction, scrollFunction } = props;
  const pagesArray = [];

  const handlePage = (event) => {
    pageFunction(event.target.textContent);
    scrollFunction();
  };

  for (let i = 1; i <= 8; i += 1) {
    pagesArray.push(<button key={i} type="button" onClick={handlePage}>{i}</button>);
  }

  return (
    <div className="pages">
      {pagesArray}
    </div>
  );
};

Pages.propTypes = {
  pageFunction: PropTypes.func.isRequired,
  scrollFunction: PropTypes.func.isRequired,
};

export default Pages;
