import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ name, imageUrl }) => (
  <div>
    <h1>{name}</h1>
    <div>
      <img src={imageUrl} alt="card" />
    </div>
  </div>
);

Summary.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Summary;
