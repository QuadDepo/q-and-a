import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  color: white;
  background: transparent;
  padding: 7px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

const ButtonPrimary = styled(BaseButton)`
  background-color: #3498db;
`;

const ButtonSecondary = styled(BaseButton)`
  color: #2c3e50;
`;

const ButtonDelete = styled(BaseButton)`
  color: #e74c3c;
`;

export { ButtonPrimary, ButtonSecondary, ButtonDelete };
