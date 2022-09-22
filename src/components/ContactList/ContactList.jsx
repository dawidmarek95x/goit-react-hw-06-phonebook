import ContactElement from 'components/ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { Info, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts
    .filter(c => c.name.toLowerCase().includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {filteredContacts.length !== 0 ? (
        <List>
          {filteredContacts.map(c => (
            <ContactElement
              key={c.id}
              id={c.id}
              name={c.name}
              number={c.number}
            />
          ))}
        </List>
      ) : (
        <Info>No contacts in the phonebook</Info>
      )}
    </>
  );
};

export default ContactList;