import styled from "styled-components";

export const LoginInputs = styled.input`
  border: none;
  background: none;
  height: 100%;
  width: 100%;
  font-size: 18px;

  &:focus {
    border: none;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const LoginDiv = styled.div`
  border: solid 1px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 45px;

  &:focus {
    zoom: 105%;
  }

  img {
    width: 26px;
    height: 26px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
