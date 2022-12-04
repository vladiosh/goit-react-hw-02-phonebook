import { render } from '@testing-library/react';
import React from 'react';
import { FilterLabel, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </FilterLabel>
  );
};

export default Filter;
