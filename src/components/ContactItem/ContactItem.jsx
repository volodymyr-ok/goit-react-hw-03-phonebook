import PropTypes from 'prop-types';
import { StyledLI } from './ContactItem.styled';

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <StyledLI>
      <p>
        <span className="name">{name}:</span>
        <span className="number">{number}</span>
      </p>

      <button type="button" onClick={() => onDelete(number)}>
        Delete
      </button>
    </StyledLI>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
