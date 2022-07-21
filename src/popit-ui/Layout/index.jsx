import styled from "styled-components";
import Flex from "../Flex";

const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background-color: darkgrey;
`;

const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 844px;
  width: 390px;
  ${(props) =>
    props.white &&
    `
    background-color: white;
    `}

  ${(props) =>
    props.gradation &&
    `
      background: linear-gradient(270deg, #ff7c69 -30%, #ffc84b 100%);
    `}
  
    ${(props) =>
    props.up &&
    `
      
        `}
      
        ${(props) =>
    props.down &&
    `
          justify-content: flex-end;
      `}
  overflow: hidden;
`;

const Layout = (props) => {
  return (
    <Wrapper justify="center" align="center">
      <PhoneContainer
        up={props.up}
        down={props.down}
        white={props.white}
        gradation={props.gradation}
      >
        {props.children}
      </PhoneContainer>
    </Wrapper>
  );
};

export default Layout;
