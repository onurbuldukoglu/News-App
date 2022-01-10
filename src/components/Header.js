/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search';
import Today from './Today';
import Categories from './Categories';
import Menu from './Menu';

const Header = (props) => {
  const { view } = props;
  const [inView, setInView] = useState(true);

  useEffect(() => {
    setInView(view);
  }, [view]);

  const bigScreen = useMediaQuery({
    query: '(min-width: 1080px)',
  });

  return (
    <div className="header">
      { bigScreen
        ? (
          <div className="header">
            <Today />
            { inView
              ? (<Categories />)
              : <h1>NewsLetter</h1>}
            <div className="button-div header-right">
              <Search />
              <button className="profile-btn" type="button" aria-label="profile"><FontAwesomeIcon icon="user" /></button>
            </div>
          </div>
        )
        : (
          <div className="header">
            <Today />
            <h1>NewsLetter</h1>
            <button className="list-btn header-right" type="button" aria-label="list"><FontAwesomeIcon icon="bars" /></button>
          </div>
        )}
      <Menu />
    </div>
  );
};

Header.propTypes = {
  view: PropTypes.bool.isRequired,
};

export default Header;
