import styled from "styled-components";
import Flex from "../Flex";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 59px;
  border: 1px solid black;
`;

const Header = (props) => {
  return (
    <Wrapper
      firstComponent={props.firstComponent}
      secondComponent={props.secondComponent}
      thirdComponent={props.thirdComponent}
      justify="space-between"
      align="center"
    >
      {props.firstComponent}
      {props.secondComponent}
      {props.thirdComponent}
    </Wrapper>
  );
};

export default Header;
