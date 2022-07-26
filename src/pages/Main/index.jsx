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

const Wrapper = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubWrapper = styled.div``;
const Main = () => {
  const [modal, setModal] = useState();
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
        <PopList />
        <PopList />
        <PopList />
        <PopList />
      </Wrapper>
    </Layout>
  );
};

export default Main;
