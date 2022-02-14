import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Menu = (props) => {
  const { categoryFunction } = props;
  return (
    <div className="menu">
      <div className="search-div">
        <form>
          <input type="text" placeholder="Search" />
          <button className="search-btn" type="submit" aria-label="search"><FontAwesomeIcon icon="search" /></button>
        </form>
      </div>

      <Categories categoryFunction={categoryFunction} />
    </div>
  );
};

Menu.propTypes = {
  categoryFunction: PropTypes.func.isRequired,
};

export default Menu;
