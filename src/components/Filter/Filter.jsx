import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <StyledLabel>
      Find contacts by name
      <input type="text" onChange={onChange} value={value} />
    </StyledLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
