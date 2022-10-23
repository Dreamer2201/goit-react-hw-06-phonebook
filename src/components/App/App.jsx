import { useState, useEffect } from 'react';
import { addContact } from 'redux/contacts/contactsSlice';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import Contacts from '../Contacts/Contacts';
import FilterContacts from '../FilterContacts';
import { Wrapper, Title } from './AppStyled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import { filterListContact } from 'redux/filter/filter-actions';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('listcontact')) ?? []);
  // const [filter, setFilter] = useState('');
 
  // useEffect(() => {
  //   window.localStorage.setItem('listcontact', JSON.stringify(contacts));
  // }, [contacts]);
  
  useEffect(() => {
    return () => {
      localStorage.removeItem('listcontact');
    }
  }, []);

    const isDuplicate = (contact) => {
    const result = contacts.contacts.find((item) => item.name === contact.name);
    return result;
  }

  const onAddContact = (contact) => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in Phonebook List`);
    }
    dispatch(addContact(contact));
  }

  const handleChangeFilter = (e) => {
  //   const { value } = e.target;
  // //   setFilter(value);
  //   const action = filterListContact(value);
  //   dispatch(action);
  }
  
  const filterContact = () => {
    console.log(filter);
    console.log(contacts);
    const filterNormolaze = filter.filter.toLocaleLowerCase();
    if (!filter) {
      return contacts;
    }

    const filterContacts = contacts.contacts.filter(({ name }) => {
      const nameContactNormolaze = name.toLocaleLowerCase();
      const resultFilter = nameContactNormolaze.includes(filterNormolaze);
      return resultFilter;
    })
    return filterContacts;
  }

  const filteredContacts = filterContact();
  
  return (<Wrapper>
                <div>
                  <Title>Phonebook</Title>
                  <PhonebookForm
                    onAddContact={onAddContact}
                  />
                </div>
                <div>
                  <Title>Contacts</Title>
                  <FilterContacts onFilter={handleChangeFilter} />
                <Contacts />
                </div>
            </Wrapper>)
  }

