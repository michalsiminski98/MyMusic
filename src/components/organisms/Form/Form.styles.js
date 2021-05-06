import styled from "styled-components";

export const Wrapper = styled.form`
  min-width: 40%;
  max-width: 600px;
  min-height: 400px;
  margin: 0 0 0 50%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, 80px);
  background: rgb(250, 250, 250);
  border: 1px solid rgb(205, 205, 205);
  border-radius: 20px;
  -webkit-box-shadow: 5px 8px 15px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 5px 8px 15px 1px rgba(0, 0, 0, 0.34);
`;

export const Title = styled.h3`
  font-size: 24px;
  letter-spacing: 1px;
  margin: 16px;
`;
