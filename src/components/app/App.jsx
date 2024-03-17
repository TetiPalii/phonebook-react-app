// import { ContactForm } from '../contactsForm/ContactForm';
// import { SearchContact } from '../searchContact/SearchContact';
// import { ContactList } from '../contactList/ContactList';
// import { Notification } from '../notification/Notification';
// import { Section } from '../section/Section';
// import css from './App.module.css';
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading, selectItems } from 'redux/selectors';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/sharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from '../../redux/auth/useAuth';
import { refreshUser } from '../../redux/auth/authOperations';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

const Home = lazy(() => import('../../pages/Home'));
const LogIn = lazy(() => import('../../pages/LogIn'));
const Register = lazy(() => import('../../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <CssVarsProvider>
      <Sheet>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="logIn"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      </Sheet>
    </CssVarsProvider>
  );
};
// <div className={css.container}>
// {
/* <Section title={'Phonebook'}>
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
</div> */
// }

// };

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidUpdate(_, prevState) {
//     console.log('ComponentDidupdate');
//     // console.log(prevProps);
//     // console.log(prevState);
//     if (prevState.contacts !== this.state.contacts) {
//       // console.log('ghjk');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const parsedContatcs = JSON.parse(localStorage.getItem('contacts'));

//     if (parsedContatcs) {
//       this.setState({ contacts: parsedContatcs });
//     }
//   }

//   handleSubmit = contactItem => {
//     const { name } = contactItem;
//     if (
//       this.state.contacts.some(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contactItem, ...contacts],
//       }));
//     }
//   };

//   getVisibleContacts = idToDelete => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(({ id }) => id !== idToDelete),
//     }));
//   };

//   onChangeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilterContact = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const filteredContacts = this.getFilterContact();
//     // console.log(filteredContacts);
//     return (
//       <div className={css.container}>
//         <Section title={'Phonebook'}>
//           <ContactForm handleSubmit={this.handleSubmit} />
//         </Section>
//         <Section title={'Contacts'}>
//           <SearchContact onChangeFilter={this.onChangeFilter} />
//           {this.state.contacts.length ? (
//             <ContactList
//               VisibleContacts={filteredContacts}
//               onDeleteBtn={this.getVisibleContacts}
//             />
//           ) : (
//             <Notification message={'the phonebook is empty!'} />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
