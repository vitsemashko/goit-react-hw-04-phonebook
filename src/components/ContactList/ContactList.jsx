import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';

const ContactList = ({ visibleContacts, onDeleteItem }) => {
  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => {
        return (
          <ContactItem
            key={nanoid()}
            id={contact.id}
            number={contact.number}
            name={contact.name}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
};

export default ContactList;
