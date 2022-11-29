import React, { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledH2 } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactsHandler = data => {
    const method = this.state.contacts.map(contact => contact.name);

    if (method.includes(data.name)) {
      alert('NOPE');
      return;
    } else {
      return this.setState({ contacts: [data, ...this.state.contacts] });
    }
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  filteredContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

  deleteContactHandler = number => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.number !== number),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <StyledH2>Phonebook</StyledH2>
        <Form contactsHandler={this.contactsHandler} />

        <StyledH2>Contacts</StyledH2>
        <Filter onChange={this.handleFilter} value={filter} />
        <Contacts
          contacts={this.filteredContacts()}
          onDelete={this.deleteContactHandler}
        />
      </>
    );
  }
}
