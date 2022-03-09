import propTypes from 'prop-types';
import React from 'react';
import {
  ItemList,
  ItemButton,
} from './ListItem.styles'

const ListItem = ({ name, number, id, onDeleteContact }) => (
  <ItemList>
    {name}: {number}
    <ItemButton
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </ItemButton>
  </ItemList>
);

ListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ListItem;