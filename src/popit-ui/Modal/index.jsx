import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import { useState } from "react";
import NoticePop from "../Noticepop";
import ExpandPop from "../ExpandPop";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled(Flex)`
  height: 100%;
  width: 100%;
`;

const Modal = (props) => {
  if (props.type === "noticePop") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <NoticePop
              modal={props.modal}
              setModal={props.setModal}
              content={props.content}
              leftButton={props.leftButton}
              rightButton={props.rightButton}
            ></NoticePop>
          </Container>
        </Wrapper>
      </div>
    );
  }
  if (props.type === "expandPop") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <ExpandPop
              popModal={props.popModal}
              setPopModal={props.setPopModal}
            ></ExpandPop>
          </Container>
        </Wrapper>
      </div>
    );
  }
};

export default Modal;
