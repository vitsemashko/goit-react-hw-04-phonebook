import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onHandleFilterChange }) => {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onHandleFilterChange} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onHandleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
