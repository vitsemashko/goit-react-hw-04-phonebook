import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteItem }) => {
  return (
    <li className={css.listItem} key={id}>
      {name}:{number}
      <button
        type="button"
        onClick={() => {
          return onDeleteItem(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
