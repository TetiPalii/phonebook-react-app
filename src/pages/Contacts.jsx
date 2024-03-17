import { ContactList } from '../components/contactList/ContactList';
import { ContactForm } from '../components/contactsForm/ContactForm';
import { Notification } from '../components/notification/Notification';
import { SearchContact } from '../components/searchContact/SearchContact';
import { Section } from '../components/section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading, selectItems } from '../redux/selectors';

export const Contacts = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <SearchContact />

        {isLoading && !error && <b>Request in progress...</b>}
        {items.length ? (
          <ContactList />
        ) : (
          <Notification message={'the phonebook is empty!'} />
        )}
      </Section>
    </main>
  );
};
