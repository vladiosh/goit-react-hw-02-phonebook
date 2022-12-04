import React from 'react';
import { Head, NameLabel, NameInput, NameBlock } from './ContactBook.styled';

const ContactsBook = ({ name }) => {
  return (
    <>
      <div>
        <Head>Phonebook</Head>
        <NameBlock>
          <NameLabel>
            Name
            <NameInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </NameLabel>
          <button type="button">Add contact</button>
        </NameBlock>
      </div>
      <div>
        <Head>Contacts</Head>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    </>
  );
};

export default ContactsBook;
