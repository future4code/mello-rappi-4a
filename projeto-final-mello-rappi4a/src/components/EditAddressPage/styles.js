import styled from "styled-components";

export const Title = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
`;

export const Form = styled.form`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  label {
    width: 78px;
    height: 18px;
    font-size: 12px;
    color: #b8b8b8;
  }

  input {
    display: block;
    width: 328px;
    height: 56px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    margin-bottom: 16px;
    padding: 19px 0px 19px 16px;
  }

  button {
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #e86e5a;
  }
`;
