import { Contact } from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import {
  FcBusinessman,
  FcBusinesswoman,
  FcManager,
  FcAssistant,
  FcCustomerSupport,
} from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { toFilter } from 'utils/filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectFilter,
  selectLoader,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectLoader);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = toFilter(items, filter);

  return (
    <ContactListStyled>
      {Boolean(items.length) &&
        (filtredContacts.length ? (
          filtredContacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              phone={number}
              avatar={<FcBusinessman />}
            />
          ))
        ) : (
          <p>Contacts not found</p>
        ))}
      {!items.length && !isLoading && <p>Contacts list is empty</p>}
    </ContactListStyled>
  );
};
