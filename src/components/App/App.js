import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
      </Container>
    );
  }
}

export default App;
