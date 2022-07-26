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

const Wrapper = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SubWrapper = styled.div``;
const Main = () => {
  const [toggled, setToggled] = useState(true);

  const onPostPop = () => {
    //모달로 글 생성하는 팝 띄우기
    Alert("모달로 글 생성하는 팝 띄우기");
  };
  return (
    <Layout white>
      <CircleButton right="305px" down="760px" onClick={onPostPop} />
      <SubWrapper>
        <MainHeader page="main" />
      </SubWrapper>
      <Wrapper>
        <CategoryList />
        <PopList />
        {toggled ? (
          <Modal>
            <NoticePop />
          </Modal>
        ) : (
          <></>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Main;
