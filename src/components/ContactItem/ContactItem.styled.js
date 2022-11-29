import styled from 'styled-components';

export const StyledLI = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  min-width: 250px;

  p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .name {
      color: #b6baff;
    }
  }

  button {
    border-radius: 5px;
    border: 1px solid #b6baff;
    padding: 5px 10px;
    background-color: #b6baff;
    margin-top: 5px;
    margin-left: auto;

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
