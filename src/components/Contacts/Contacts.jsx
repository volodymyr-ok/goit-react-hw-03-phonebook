import { ContactItem } from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { StyledUL } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length !== 0 && (
        <StyledUL>
          {contacts.map(({ name, number }) => {
            return (
              <ContactItem
                key={nanoid()}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            );
          })}
        </StyledUL>
      )}
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
