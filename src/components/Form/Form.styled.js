import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto 35px;
  max-width: 320px;
  text-align: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 22px;

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
  }

  button {
    border-radius: 5px;
    border: 1px solid #b6baff;
    padding: 5px 10px;
    background-color: #b6baff;

    color: #222327;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: transparent;
      color: inherit;
    }
  }
`;
