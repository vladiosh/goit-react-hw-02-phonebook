import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Head, NameLabel, Input, FormBlock } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Head>Phonebook</Head>
        <form onSubmit={this.handleSubmit}>
          <FormBlock>
            <NameLabel htmlFor={this.nameInputId}>
              Name
              <Input
                value={name}
                onChange={this.handleNameChange}
                id={this.nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </NameLabel>

            <NameLabel htmlFor={this.nameInputId}>
              Number
              <Input
                value={number}
                onChange={this.handleNumberChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </NameLabel>
            <button type="submit">Add contact</button>
          </FormBlock>
        </form>
      </>
    );
  }
}

export default ContactForm;
