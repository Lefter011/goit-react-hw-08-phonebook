import style from './filterInput.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export const FilterInput = () => {
  const dispatch = useDispatch();
  const onFilterInput = (e) => {
    dispatch(changeFilter(e.currentTarget.value))
  }
  
  return <label> Search contact by name
  <input className={style.filterInput} type="text" onInput={onFilterInput} />
  </label>
}