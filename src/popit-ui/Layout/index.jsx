import styled from "styled-components";
import Flex from "../Flex";

const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background: gold;
`;

const PhoneContainer = styled.div`
  height: 844px;
  width: 390px;
  background-color: yellowgreen;
`;
const Layout = ({ children }) => {
  return (
    <Wrapper justify="center" align="center">
      <PhoneContainer>{children}</PhoneContainer>
    </Wrapper>
  );
};

export default Layout;
