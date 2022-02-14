/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    title, description, image, url, author, date,
  } = props;
  const [desc, setDesc] = useState(description);
  const [img, setImg] = useState(image);

  useEffect(() => {
    if (image == null) {
      setImg('images/news-placeholder.png');
    }
    if (description == null || description === '') {
      setDesc('Description not available');
    }
  });

  return (
    <div className="card">
      <a href={url}><img src={img} alt="news-img" /></a>
      <div className="text-content">
        <a href={url}>{title}</a>
        <p className="description">{desc}</p>
        <div className="card-footer">
          <p className="date">{date}</p>
          <p className="author">{author}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string.isRequired,
};

Card.defaultProps = {
  description: '',
  image: '',
  author: '',
};

export default Card;
