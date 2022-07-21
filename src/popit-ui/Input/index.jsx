import styled from "styled-components";

const StyledInput = styled.input`
  width: 304px;
  height: 48px;
  border-radius: 50px;
  padding-left: 20px;
  border: 1px solid ${(props) => props.borderColor || props.theme.colors.main};

  ::placeholder {
    color: lightgrey;
  }

  :focus {
    border: 1px solid props.theme.colors.orange;
  }
`;

const Input = (props) => {
  return <StyledInput placeholder={props.placeholder}></StyledInput>;
};
export default Input;
