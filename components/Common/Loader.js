import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

const Loader = ({ type, color }) => (
  <ReactLoading
    type={type}
    color={color}
    height={200}
    width={100}
  />
);

Loader.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
};

export default Loader;
