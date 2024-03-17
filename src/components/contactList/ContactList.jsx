import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';

import {
  selectError,
  selectIsLoading,
  selectItems,
  selectVisibleContacts,
} from '../../redux/selectors';
import { deleteContacts, fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';
import { Button } from '@mui/joy';

export function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectItems);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error.message}</p>}
      {items.length > 0 &&
        visibleContacts.map(({ id, name, number }) => {
          // console.log(id);
          return (
            <li key={id} className={css.item__contact}>
              <div className={css.text__container}>
                <p className={css.item__text}>
                  {name}: <span>{number}</span>
                </p>
              </div>
              <div className={css.button__container}>
                <Button
                  size="sm"
                  className={css.contact__btn}
                  type="button"
                  onClick={() => {
                    dispatch(deleteContacts(id));
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
