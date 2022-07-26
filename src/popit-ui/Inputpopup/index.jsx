import React from "react";
import styled from "styled-components";
import Flex from "../Flex";

const Container = styled(Flex)`
  background-color: pink;
  width: 360px;
  height: 200px;
  border-radius: 16px;
  margin-top: ${(props) => (props.margintop ? props.margintop : "none")};
  margin-left: ${(props) => (props.marginleft ? props.marginleft : "none")};
  margin-right: ${(props) => (props.marginright ? props.marginright : "none")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "none"};
`;

const Smallcontainer = styled(Flex)``;
const Inputpopup = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

export default Inputpopup;
