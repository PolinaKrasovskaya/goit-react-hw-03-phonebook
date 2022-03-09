import React from 'react';
import propTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import { ListContacts } from './ContactList.styles'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContacts>
      {contacts.map(({ name, id, number }) => (
        <ListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          id={id}
        />
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactList;