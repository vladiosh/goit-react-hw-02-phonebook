import PropTypes from 'prop-types';
import { ContactItem, Text } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <Text>{name}:</Text>
              <Text>{number}</Text>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </ContactItem>
          );
        })}
      </ul>
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
  onDelete: PropTypes.func.isRequired,
};
