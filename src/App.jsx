import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import initialContacts from './components/initialContacts';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = React.useState(initialContacts);
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
    onContactsFilter(); // eslint-disable-next-line
  }, [filter]);
  const onHandleSubmit = e => {
    e.preventDefault();
    let checked = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (checked) {
      alert('Current username is alredy in the list');
      setName('');
      setNumber('');
    } else {
      setVisibleContacts(prevState => [
        ...prevState,
        { id: nanoid(), name, number },
      ]);
      setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
      setName('');
      setNumber('');
    }
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
