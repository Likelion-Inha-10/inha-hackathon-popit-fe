import styled from "styled-components";

const Typography = styled.div`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : "black"};
  ${(props) =>
    props.center &&
    `
  text-align: center;`}

  ${(props) => props.underline && `text-decoration: underline;`}
`;
