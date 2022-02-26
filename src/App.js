import './App.css';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
