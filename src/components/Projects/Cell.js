import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image2}`} alt={data.title} />
      </a>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image3}`} alt={data.title} />
      </a>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image4}`} alt={data.title} />
      </a>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    image3: PropTypes.string.isRequired,
    image4: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
