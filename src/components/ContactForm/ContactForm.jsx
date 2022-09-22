import { Button, Form, Input, Label } from './ContactForm.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions/contactsActions';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addNewContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(c => c.name === name)) {
      alert(`${name} is already in contacts`);
    } else if (contacts.some(c => c.number === number)) {
      const [contactWithNumber] = contacts.filter(c => c.number === number);
      alert(
        `Number ${contactWithNumber.number} is already in phonebook. It belongs to ${contactWithNumber.name}.`
      );
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          number,
        })
      );
      form.reset();
    }
  };

  return (
    <Form onSubmit={addNewContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
