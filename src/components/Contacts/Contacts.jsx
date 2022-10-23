import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/contacts/contactsSlice";
import { ContactsList, ContactItem, DeleteContactBtn } from './ContactsStyled';

export default function Contacts({items}) {
    const dispatch = useDispatch();
    const elements = items.map(({ id, name, number }) => {
        return  <ContactItem key={id}> {name}: {number}
            <DeleteContactBtn type='button' onClick={() => dispatch(removeContact({ id }))}> Delete
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