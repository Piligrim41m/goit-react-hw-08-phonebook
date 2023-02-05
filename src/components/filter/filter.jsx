import React from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/filterSlice';
import { FilterField, FilterLabel } from './filter.styled';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  

  const onFilterChange = e => {
    dispatch(update(e.currentTarget.value));
  };

  return (
    <div>
      <form autoComplete="off">
        <FilterLabel htmlFor="filter">
          Find contacts by name
          <FilterField
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={onFilterChange}
            value={filterValue}
            required
          />
        </FilterLabel>
      </form>
    </div>
  );
};
