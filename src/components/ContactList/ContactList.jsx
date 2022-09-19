import ContactElement from 'components/ContactElement/ContactElement';
import PropTypes from 'prop-types';
import { Info, List } from './ContactList.styled';

export const ContactList = ({contacts, deleteContact}) => {
  return (
    <>
        {(contacts.length !== 0)
          ? <List>
              {contacts.map(c => <ContactElement key={c.id} id={c.id} name={c.name} number={c.number} deleteContact={deleteContact}/>)}
            </List>
          : <Info>No contacts in the phonebook</Info>
        }
    </>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactList;