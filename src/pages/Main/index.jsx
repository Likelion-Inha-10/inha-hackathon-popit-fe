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

const Wrapper = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const SubWrapper = styled.div``;
const Main = () => {
  const [toggled, setToggled] = useState(false);

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
      </Wrapper>
    </Layout>
  );
};

export default Main;
