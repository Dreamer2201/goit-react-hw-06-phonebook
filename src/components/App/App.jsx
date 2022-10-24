import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Title } from './AppStyled';
import { addContact } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { filterNameContact } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filter-selectors';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import Contacts from '../Contacts/Contacts';
import FilterContacts from '../FilterContacts';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

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
    const { value } = e.target;
    dispatch(filterNameContact(value));
  }
  
  const filterContact = () => {
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
      <Contacts items={filteredContacts} />
                </div>
            </Wrapper>)
  }

