/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Search from './Search';
import Today from './Today';
import Categories from './Categories';
import Menu from './Menu';

const Header = (props) => {
  const { view, queryFunction } = props;
  const [inView, setInView] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.addEventListener('mousedown', (e) => {
      if (dropdownRef.current && showMenu && !dropdownRef.current.contains(e.target)) {
        if (showMenu === true) {
          setShowMenu(false);
        }
      }
    });
  });

  const handleMenuToggle = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    setInView(view);
  }, [view]);

  const bigScreen = useMediaQuery({
    query: '(min-width: 1080px)',
  });

  return (
    <div className="header">
      { bigScreen
        ? ( // if on a big screen display categories on the header
          <div className="header">
            <Today />
            { inView
              ? (<Categories />)
              : (<Link to="/" className="no-style"><h1>NewsLetter</h1></Link>)}
            <div className="button-div header-right">
              <Search queryFunction={queryFunction} />
            </div>
          </div>
        )
        : ( // if on a small screen display the title in the header and the categories under a menu
          <div className="header" ref={dropdownRef}>
            <Today />
            <Link to="/" className="no-style"><h1>NewsLetter</h1></Link>
            {
              showMenu
                ? (<Menu />)
                : (<button className="list-btn header-right" type="button" aria-label="list" onClick={handleMenuToggle}><FontAwesomeIcon icon="bars" /></button>)
            }
          </div>
        )}
    </div>
  );
};

Header.propTypes = {
  view: PropTypes.bool.isRequired,
  queryFunction: PropTypes.func.isRequired,
};

export default Header;
