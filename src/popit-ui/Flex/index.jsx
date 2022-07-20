import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "initial"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
`;

export default Flex;
