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
import Modal from "../../popit-ui/Modal";
import ExpandPop from "../../popit-ui/ExpandPop";
import theme from "../../assets/theme";

const Wrapper = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubWrapper = styled.div``;
const Main = () => {
  const [CreateNewPop, setCreateNewPop] = useState(false);

  return (
    <Layout white>
      {CreateNewPop ? (
        <Modal
          CreateNewPop={CreateNewPop}
          setCreateNewPop={setCreateNewPop}
          type="inputPopUp"
        />
      ) : (
        <></>
      )}
      <CircleButton
        right="305px"
        down="760px"
        onClick={() => setCreateNewPop(!CreateNewPop)}
      />
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
