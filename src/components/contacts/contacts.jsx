import { Filter } from '../filter/filter';
import {
  DeleteButton,
  ContactList,
  ContactName,
  ContactNumber,
  ContactItem,
} from './contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/operations';
import { getContactsList, getFilterRequest } from 'redux/selectors';
import axios from 'axios';

export const Contacts = () => {
  const dispatch = useDispatch();
  const {contactsList, isLoading, error} = useSelector(getContactsList);
  const filterRequest = useSelector(getFilterRequest);

  const contactsFilter = () => {
    const normalizedFilter = filterRequest.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    if (axios.defaults.headers.common.Authorization) {
      dispatch(fetchContacts());
    }
  }, [dispatch])

  const onDelete = e => {
    dispatch(deleteContacts(e.currentTarget.value));
    
  };

  const contacts = contactsFilter();
  return (
    <>
      <Filter></Filter>
      {isLoading && (<p>Loading...</p>)}
      {error !== null &&(<p>{error}</p>)}
      {!isLoading && (
        <ContactList>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactItem key={id}>
                <ContactName>{name}</ContactName>:
                <ContactNumber>{number}</ContactNumber>
                <DeleteButton type="button" value={id} onClick={onDelete}>
                  delete
                </DeleteButton>
              </ContactItem>
            );
          })}
        </ContactList>
      )}
    </>
  );
};
