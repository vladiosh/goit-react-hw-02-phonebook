import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Head, NameLabel, NameInput, NameBlock } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    // contacts: [],
    id: nanoid(),
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  nameInputId = nanoid();

  render() {
    const { name } = this.state;
    return (
      <>
        <Head>Phonebook</Head>
        <form onSubmit={this.handleSubmit}>
          <NameBlock>
            <NameLabel htmlFor={this.nameInputId}>
              Name
              <NameInput
                value={name}
                onChange={this.handleChange}
                id={this.nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </NameLabel>
            <button type="submit">Add contact</button>
          </NameBlock>
        </form>
      </>
    );
  }
}

export default ContactForm;
