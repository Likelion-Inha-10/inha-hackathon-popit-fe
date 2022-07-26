import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 52px;
  height: 48px;
  width: 324px;
  border: none;
  color: white;
  font-size: 16px;
  text-align: center;
  font-family: "NanumSquareR";

  :hover {
    background-color: ${(props) => props.theme.colors.orange};
  }

  ${(props) =>
    props.large &&
    `
      width: 160px;
    `}
  ${(props) =>
    props.medium &&
    `
      font-size: 12px;
      width: 121px;
      height: 36px;
    `}
  
  ${(props) =>
    props.small &&
    `
      font-size: 12px;
      width: 70px;
      height: 30px;
    `}

  ${(props) =>
    props.extraSmall &&
    `
      color: ${props.theme.colors.middlegray};
      font-size: 12px;
      width: 48px;
      height: 24px;
  `}

  

  ${(props) =>
    props.white &&
    `
      border: 1px solid ${props.theme.colors.main};
      color: ${props.theme.colors.middlegray};
      background-color: ${props.theme.colors.white};

      :hover {
        background-color: ${props.theme.colors.main};
      }
    `}
  ${(props) =>
    props.whiteGray &&
    `
      color: ${props.theme.colors.black};
      background-color: ${props.theme.colors.whitegray};

      :hover {
        background-color: ${props.theme.colors.gray};
      }
    `}
  ${(props) =>
    props.redTypo &&
    `
      color: ${props.theme.colors.warningred} ;
    `}
  ${(props) =>
    props.gray &&
    `
      background-color: ${props.theme.colors.gray};
      
      :hover {
        color: ${props.theme.colors.darkgray};
        background-color: ${props.theme.colors.middlegray};
      }
    `}
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
export default Button;
