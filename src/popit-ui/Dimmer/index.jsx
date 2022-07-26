import React from "react";
import styled from "styled-components";
import Flex from "../Flex";

const Wrapper = styled(Flex)`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;
const Dimmer = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Dimmer;
