import React from "react";
import Flex from "../Flex";
import styled from "styled-components";
import Dimmer from "../Dimmer";
import theme from "../../assets/theme";
import Typography from "../Typography";
const Wrapper = styled(Flex)`
  height: 494px;
  width: 304px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  background-position: center;

  background-image: url(${(props) => props.theme.user.image});
`;

const ExpandPop = (props) => {
  return (
    <div>
      <Wrapper onClick={() => props.setPopModal(!props.popModal)}>
        <Dimmer>
          <Typography regular16 color="white">
            {theme.user.pop}
          </Typography>
        </Dimmer>
      </Wrapper>
    </div>
  );
};
export default ExpandPop;
