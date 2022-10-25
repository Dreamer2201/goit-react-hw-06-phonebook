import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Title } from './AppStyled';
import { addContact, removeContact } from 'redux/contacts/contacts-Slice';
import filterContact from 'redux/contacts/contacts-selectors';
import { filterNameContact } from 'redux/filter/filter-Slice';
import { getFilter } from 'redux/filter/filter-selectors';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import Contacts from '../Contacts/Contacts';
import FilterContacts from '../FilterContacts';

export default function App() {
  const contacts = useSelector(filterContact);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const isDuplicate = (contact) => {
    const result = contacts.find((item) => item.name === contact.name);
    return result;
  }

  const onAddContact = (contact) => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in Phonebook List`);
    } 
    dispatch(addContact(contact));
  }

  const deleteContact = (id) => {
    dispatch(removeContact(id));
  }

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    dispatch(filterNameContact(value));
  }
  
  return (<Wrapper>
                <div>
                  <Title>Phonebook</Title>
                  <PhonebookForm
                    onAddContact={onAddContact}
                  />
                </div>
                <div>
                  <Title>Contacts</Title>
                  <FilterContacts onFilter={handleChangeFilter} value={filter} />
      <Contacts items={contacts} removeContact={deleteContact} />
                </div>
            </Wrapper>)
  }

