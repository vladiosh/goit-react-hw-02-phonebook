import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </Container>
    );
  }
}

export default App;
