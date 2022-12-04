import PropTypes from 'prop-types';
import { ContactItem, Text } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ol>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <Text>{name}:</Text>
              <Text>{number}</Text>
            </ContactItem>
          );
        })}
      </ol>
    </>
  );
};

export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
