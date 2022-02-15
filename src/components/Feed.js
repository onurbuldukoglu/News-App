/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import Card from './Card';
import Pages from './Pages';

const Feed = (props) => {
  const { articles, viewFunc, pageFunction } = props;

  const dateConverter = (date) => {
    const convertedDate = new Date(date);
    return convertedDate.toLocaleDateString('en-GB');
  };

  const toTheTop = () => {
    window.scrollTo(0, 0);
  };

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,
  };

  const bigScreen = useMediaQuery({
    query: '(min-width: 1080px)',
  });

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    viewFunc(inView);
  }, [inView]);

  return (
    <div className="feed">
      {bigScreen && (
      <div className="title-div">
        <h1 ref={ref}>NewsLetter</h1>
        <hr />
      </div>
      )}

      <Masonry className="masonry" breakpointCols={breakpointColumnsObj} columnClassName="masonry-column">
        {articles.map((article) => (
          <Card
            key={`${article.urlToImage}${article.title}`}
            title={article.title}
            description={article.description}
            image={article.urlToImage}
            url={article.url}
            date={dateConverter(article.publishedAt)}
            author={article.author}
          />
        ))}
      </Masonry>
      <hr />
      <Pages pageFunction={pageFunction} scrollFunction={toTheTop} />
      {!inView && <button type="button" className="to-top-btn" onClick={toTheTop} aria-label="to-top"><FontAwesomeIcon icon="arrow-up" /></button>}
    </div>

  );
};

Feed.propTypes = {
  articles: PropTypes.array.isRequired,
  viewFunc: PropTypes.func.isRequired,
  pageFunction: PropTypes.func.isRequired,
};
export default Feed;
