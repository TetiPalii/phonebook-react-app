import PropTypes from 'prop-types';
import css from './SearchContact.module.css';
import { changeFilter } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';
import { Input } from '@mui/joy';

export const SearchContact = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <div>
      <label className={css.label__search}>
        Find contact by name
        <Input type="text" onChange={onChangeFilter} name="search" />
      </label>
    </div>
  );
};

SearchContact.propTypes = {
  onChangeFilter: PropTypes.func,
};
