import styled from "styled-components";

const Typography = styled.div`
  font-size: ${(props) => props.size || "1rem"};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : "black"};
  ${(props) =>
    props.center &&
    `
  text-align: center;`}

  ${(props) =>
    props.underline &&
    `
      text-decoration: underline;
      text-underline-position: under;
    `}

  ${(props) =>
    props.title &&
    `
      font-size: 1.75rem;
      font-weight: bold;
    `}
  
    ${(props) =>
    props.small &&
    `
      font-size: 14px;
      font-family: "NanumSquareL";
    `}
  
    ${(props) =>
    pros.bold20 &&
    `
      font-family: "NanumSquare";
      font-size: 20px;
    `}

    ${(props) =>
    props.regular16 &&
    `
      font-family: "NanumSquareR";
      font-size: 16px;
    `}
    ${(props) =>
    props.bold16 &&
    `
    font-family: "NanumSquare";
    font-size: 16px;
    `}
    ${(props) =>
    props.regular12 &&
    `
    font-family: "NanumSquareR";
    font-size: 12px;
  `}
`;

export default Typography;
