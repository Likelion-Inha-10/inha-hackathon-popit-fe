import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import { useState } from "react";
import ExpandPop from "../ExpandPop";
import InputPopUp from "../InputPopUp";
import NoticePopUp from "../NoticePopUp";
import CompletePopUp from "../CompletePopUp";
import SelectPopUp from "../SelectPopUp";

const Wrapper = styled(Flex)`
  position: fixed;
  width: 390px;
  height: 844px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled(Flex)`
  height: 100%;
  width: 100%;
`;

const Modal = (props) => {
  if (props.type === "selectPopUp") {
    return (
      <Wrapper onClick={() => props.setClickMore(!props.clickMore)}>
        <Container
          justify="center"
          align="flex-end"
          onClick={() => props.setClickMore(!props.clickMore)}
        >
          <SelectPopUp
            type="small"
            first="팝 저장"
            second="팔로우 취소"
            clickMore={props.clickMore}
            setClickMore={props.setClickMore}
          ></SelectPopUp>
        </Container>
      </Wrapper>
    );
  }
  if (props.type === "noticePopUp") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <NoticePopUp
              PopModal={props.PopModal}
              setPopModal={props.setPopModal}
              content={props.content}
              leftButton={props.leftButton}
              rightButton={props.rightButton}
              usage={props.usage}
            ></NoticePopUp>
          </Container>
        </Wrapper>
      </div>
    );
  }
  if (props.type === "expandPopUp") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <ExpandPop></ExpandPop>
          </Container>
        </Wrapper>
      </div>
    );
  }
  if (props.type === "completePopUp") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <CompletePopUp
              PopModal={props.completeModal}
              setPopModal={props.setCompleteModal}
              content={props.content}
              subcontent={props.subcontent}
            ></CompletePopUp>
          </Container>
        </Wrapper>
      </div>
    );
  }

  if (props.type === "inputPopUp") {
    return (
      <Wrapper onClick={() => props.setCreateNewPop(!props.createNewPop)}>
        <Container justify="center" align="center">
          <InputPopUp
            left="285px"
            down="125px"
            createNewPop={props.createNewPop}
            setCreateNewPop={props.setCreateNewPop}
          ></InputPopUp>
        </Container>
      </Wrapper>
    );
  }
};

export default Modal;
