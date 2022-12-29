import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = React.useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [visibleContacts, setVisibleContacts] = React.useState([]);
  const onHandleNameChange = e => {
    setName(e.target.value);
  };
  const onHandleNumberChange = e => {
    setNumber(e.target.value);
  };
  const onHandleFilterChange = e => {
    setFilter(e.target.value);
  };
  const onContactsFilter = () => {
    let visibleContacts = [...contacts].filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    setVisibleContacts(visibleContacts);
  };
  const onDeleteItem = id => {
    let deletedContacts = [...visibleContacts].filter(contact => {
      return contact.id !== id;
    });
    setVisibleContacts(deletedContacts);
  };
  React.useEffect(() => {
    onContactsFilter();
  }, [filter]);

  const onHandleSubmit = e => {
    e.preventDefault();
    setVisibleContacts(prevState => [
      ...prevState,
      { id: nanoid(), name, number },
    ]);
    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
    setName('');
    setNumber('');
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm
        name={name}
        number={number}
        onHandleSubmit={onHandleSubmit}
        onHandleNameChange={onHandleNameChange}
        onHandleNumberChange={onHandleNumberChange}
      />
      <Filter filter={filter} onHandleFilterChange={onHandleFilterChange} />
      <h2>Contacts</h2>
      <ContactList
        visibleContacts={visibleContacts}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
};

export default App;
