import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "../../redux/contacts/contactsActions"
import style from "./ContactList.module.css";



const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={style.Item}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => {
            dispatch(deleteContact(id));
          }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactList;