import React from 'react';
import { Component } from 'react';
import ContactsBook from '../ContactsBook';

import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { name } = this.state;

    return (
      <Container>
        <ContactsBook name={name} />
      </Container>
    );
  }
}

export default App;
