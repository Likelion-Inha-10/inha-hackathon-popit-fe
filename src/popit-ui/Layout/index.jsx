import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "../Flex";

const Width = styled.div`
  height: 100%;
  min-height: 812px;
  max-width: 375px;
  margin: 0 auto;
  padding: 50px;
`;

const StyledFlex = styled(Flex)`
  height: 100% !important;
`;

const Layout = ({ children }) => (
  <Width>
    <StyledFlex justify="center" align="center" direction="column">
      {children}
    </StyledFlex>
  </Width>
);

export default Layout;

//이렇게 하는 게 맞나요... 일단 이해한 부분까지 코드 적어봤슴다
