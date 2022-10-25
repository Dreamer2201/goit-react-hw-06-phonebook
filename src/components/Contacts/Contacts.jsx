import PropTypes from "prop-types";
import { ContactsList, ContactItem, DeleteContactBtn } from './ContactsStyled';
import { removeContact } from "redux/contacts/contacts-Slice";
import { useSelector, useDispatch } from 'react-redux';
import filterContact from 'redux/contacts/contacts-selectors';

export default function Contacts() {
    const dispatch = useDispatch();
    const items = useSelector(filterContact);
    const elements = items.map(({ id, name, number }) => {
        return  <ContactItem key={id}> {name}: {number}
            <DeleteContactBtn type='button' onClick={() => dispatch(removeContact(id))}> Delete
                    </DeleteContactBtn>
                </ContactItem>
    })
    return (
            <ContactsList>
                {elements}
            </ContactsList>
    )
}

Contacts.propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
        deleteContact: PropTypes.func,
}