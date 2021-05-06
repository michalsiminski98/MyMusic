import styled from "styled-components";

export const StyledButton = styled.button`
  width: 130px;
  height: 30px;
  margin-top: 40px;
  border: 1px solid black;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  &:hover {
    background: rgb(190, 190, 190);
    border: rgb(190, 190, 190);
  }
`;
