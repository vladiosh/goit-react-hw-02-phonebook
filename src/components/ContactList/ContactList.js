import PropTypes from 'prop-types';
// import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ id, name }) => {
          return (
            <li key={id}>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
