import React from "react";
import Layout from "../../popit-ui/Layout";
import { useState } from "react";
import MainHeader from "../../popit-ui/MainHeader/index";
import CategoryList from "./components/CategoryList";
import PopList from "./components/PopList";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import CircleButton from "../../popit-ui/CircleButton";
import Alert from "../../popit-ui/Alert";
import NoticePop from "../../popit-ui/Noticepop/index";
import Modal from "../../popit-ui/Modal";
import ExpandPop from "../../popit-ui/ExpandPop";

const Wrapper = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubWrapper = styled.div``;
const Main = () => {
  const [modal, setModal] = useState(false);
  const [popModal, setPopModal] = useState(false);
  return (
    <Layout white>
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          rightButton="확인"
          leftButton="취소"
          content="hi"
          type="noticePop"
        />
      )}
      {popModal && (
        <Modal popModal={popModal} setPopModal={setPopModal} type="expandPop" />
      )}
      <CircleButton
        right="305px"
        down="760px"
        onClick={() => {
          setModal(!modal);
        }}
      />
      <SubWrapper>
        <MainHeader page="main" />
      </SubWrapper>
      <Wrapper>
        <CategoryList />
        <PopList popModal={popModal} setPopModal={setPopModal} />
      </Wrapper>
    </Layout>
  );
};

export default Main;
