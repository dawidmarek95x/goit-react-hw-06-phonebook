import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { AppWrapper, LogoIcon } from "./App.styled";
import { loadFromLocalStorage, saveToLocalStorage } from "services/localStorageSupport";

export const App = () => {
  const [contacts, setContacts] = useState(
    loadFromLocalStorage("contacts")
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    saveToLocalStorage("contacts", contacts);
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(c => c.name === name)) {
      alert(`${name} is already in contacts`);
    } else if ((contacts.some(c => c.number === number))) {
      const contactWithNumber = contacts.filter(c => c.number === number);
      alert(`Number ${contactWithNumber[0].number} is already in phonebook. It belongs to ${contactWithNumber[0].name}.`);
    } else {
      setContacts((contacts) => contacts = [newContact, ...contacts]);
    };
  };

  const getContacts = (() => {
    const filteredContacts = contacts
      .filter(c => c.name.toLowerCase().includes(filter))
      .sort((a, b) => a.name.localeCompare(b.name));
    return filteredContacts;
  })();

  const deleteContact = (id) => () => {
    setContacts(contacts.filter(c => c.id !== id));
  }

  return (
    <AppWrapper>
      <h1>
        <LogoIcon />Phonebook
      </h1>
      <ContactForm 
        addContact={addContact}
      />
      <h2>Contacts</h2>
      <Filter setFilter={setFilter}/>
      <ContactList 
        contacts={getContacts}
        deleteContact={deleteContact}
      />
    </AppWrapper>
  )
}

export default App;