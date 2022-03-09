import React from 'react';
import propTypes from 'prop-types';
import {
  FilterLabel,
  FilterInput,
} from './Filter.styles';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
        <FilterInput
          type="text"
          value={value}
          onChange={onChange}
        />
    </FilterLabel>
  )
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;