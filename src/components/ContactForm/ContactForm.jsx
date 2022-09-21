import { useEffect, useState } from "react";
import { Button, Form, Input, Label } from "./ContactForm.styled";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsReducer";
import { saveToLocalStorage } from "services/localStorageSupport";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const addNewContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(c => c.name === name)) {
      alert(`${name} is already in contacts`);
    } else if (contacts.some(c => c.number === number)) {
      const contactWithNumber = contacts.filter(c => c.number === number);
      alert(
        `Number ${contactWithNumber[0].number} is already in phonebook. It belongs to ${contactWithNumber[0].name}.`
      );
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact(name, number);
  }

  useEffect(() => {
    saveToLocalStorage('contacts', contacts);
  }, [contacts]);

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={changeName}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={changeNumber}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  )
}

export default ContactForm;