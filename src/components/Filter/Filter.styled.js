import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 18px;

  input {
    margin-top: 3px;
    border-radius: 5px;
    border: 1px solid #d3d5ff40;
    min-width: 250px;
    height: 35px;
    background-color: #b6baff14;
    color: #7f86ff;
    text-align: center;
    font-family: inherit;
    font-size: 20px;
    padding: 5px 10px;

    &:focus {
      background-color: #d3d5ff40;
      outline: none;
    }
  }
`;
