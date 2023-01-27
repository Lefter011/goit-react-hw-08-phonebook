import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/phonebook/contactsSlice';

import { Input } from '@chakra-ui/react';
import style from './filterInput.module.css';

export const FilterInput = () => {
  const dispatch = useDispatch();
  const onFilterInput = (e) => {
    dispatch(changeFilter(e.currentTarget.value))
  }
  
  return <label>
  <Input placeholder='Search contact by name' className={style.filterInput} type="text" onInput={onFilterInput} />
  </label>
}