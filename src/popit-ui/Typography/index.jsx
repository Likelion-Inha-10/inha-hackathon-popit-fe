import styled from "styled-components";

const Typography = styled.div`
  font-family: "NanumSquare";
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
    props.bold24 &&
    `
        font-family: "NanumSquare";
        font-size: 24px;
      `}
    
    ${(props) =>
    props.bold20 &&
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
    props.bold12 &&
    `
    font-family: "NanumSquare";
    font-size: 12px;
    `}
    ${(props) =>
    props.regular12 &&
    `
    font-family: "NanumSquareR";
    font-size: 12px;
  `}
     ${(props) =>
    props.regular10 &&
    `
    font-family: "NanumSquareR";
    font-size: 10px;
  `}
`;

export default Typography;
