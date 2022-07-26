import React from "react";
import Flex from "../Flex";
import styled from "styled-components";
import Dimmer from "../Dimmer";

const Wrapper = styled(Flex)`
  height: 494px;
  width: 304px;
  background-image: url(${(props) => props.src})
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
`;

const ExpandPop = (props) => {
  return (
    <div>
      <Wrapper
        src={props.src}
        onClick={() => props.setPopModal(!props.popModal)}
      >
        <Dimmer></Dimmer>
      </Wrapper>
    </div>
  );
};
export default ExpandPop;
