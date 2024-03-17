import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/operations';
import Notiflix from 'notiflix';
import { selectItems } from '../../redux/selectors';
import Input from '@mui/joy/Input';
import { Button } from '@mui/joy';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;

    if (
      items.some(
        contact =>
          contact.name.toLowerCase() === name.value.toLowerCase().trim()
      )
    ) {
      Notiflix.Report.warning(
        'Warning',
        `${name.value} is already in contacts.`
      );
      return;
    } else {
      dispatch(addContacts({ name: name.value, number: number.value }));
    }

    e.target.reset();
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button size="sm" type="submit">
        Add contact
      </Button>
    </form>
  );
};
