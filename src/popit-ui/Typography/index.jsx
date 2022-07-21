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
    `}

  ${(props) =>
    props.title &&
    `
      font-size: 1.75rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.headline &&
    `
      font-size: 1.25rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.subhead &&
    `
      font-size: 0.875rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.body &&
    `
      font-size: 0.875rem;
      font-weight: normal;
    `}

  ${(props) =>
    props.bold300 &&
    `
     font-weight : 300;
   `}

  ${(props) =>
    props.bold400 &&
    `
     font-weight : 400;
   `}

  ${(props) =>
    props.bold700 &&
    `
      font-weight : 700;
    `}

  ${(props) =>
    props.inline &&
    `
      display : inline-block;
    `}
`;

export default Typography;
