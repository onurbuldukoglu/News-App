import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Categories from './Categories';

const Menu = () => (
  <div className="menu">
    <div className="search-div">
      <form>
        <input type="text" placeholder="Search" />
        <button className="search-btn" type="submit" aria-label="search"><FontAwesomeIcon icon="search" /></button>
      </form>
    </div>
    <div className="profile-div">
      <p>Log in</p>
      <button className="profile-btn" type="button" aria-label="profile"><FontAwesomeIcon icon="user" /></button>
    </div>

    <Categories />
  </div>
);

export default Menu;
