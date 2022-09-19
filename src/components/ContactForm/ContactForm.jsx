import { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Form, Input, Label } from "./ContactForm.styled";

const ContactForm = ({addContact}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, number);
    setName("");
    setNumber("");
  }

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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
}

export default ContactForm;