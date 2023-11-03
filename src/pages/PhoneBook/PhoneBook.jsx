import { useSelector } from 'react-redux';
import { PhoneBookHeader, PhoneBookStyled } from './PhoneBook.styled';

import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import Error from 'components/Error/Error';
import { selectError } from 'redux/contacts/selectors';
import { LogOut } from 'components/LogOut/LogOut';
import { selectStatusAuth } from 'redux/userAuth/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const PhoneBook = () => {
  const error = useSelector(selectError);
  const { isLoggedIn } = useSelector(selectStatusAuth);
  return (
    <PhoneBookStyled>
      <PhoneBookHeader>
        <h3>PHONEBOOK</h3>
        <LogOut />
      </PhoneBookHeader>
      <Filter />
      <ContactForm />
      <p>Contacts</p>
      {isLoggedIn && <ContactList />}
      {error && <Error />}
    </PhoneBookStyled>
  );
};
