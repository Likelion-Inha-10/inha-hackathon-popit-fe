import React from "react";
import Layout from "../../popit-ui/Layout";
import { useState } from "react";
import MainHeader from "../../popit-ui/MainHeader/index";
import CategoryList from "./components/CategoryList";
import PopList from "./components/PopList";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import CircleButton from "../../popit-ui/CircleButton";
import Modal from "../../popit-ui/Modal";
import theme from "../../assets/theme";

const Wrapper = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubWrapper = styled.div``;
const Main = () => {
  const [createNewPop, setCreateNewPop] = useState(false);
  const [clickMore, setClickMore] = useState(false);
  return (
    <Layout white>
      {createNewPop ? (
        <Modal
          createNewPop={createNewPop}
          setCreateNewPop={setCreateNewPop}
          type="inputPopUp"
        />
      ) : (
        <></>
      )}
      {clickMore ? (
        <Modal
          clickMore={clickMore}
          setClickMore={setClickMore}
          type="selectPopUp"
        />
      ) : (
        <></>
      )}
      <CircleButton
        right="305px"
        down="760px"
        onClick={() => setCreateNewPop(!createNewPop)}
      />
      <SubWrapper>
        <MainHeader page="main" />
      </SubWrapper>
      <Wrapper>
        <CategoryList />
        <PopList clickMore={clickMore} setClickMore={setClickMore} />
      </Wrapper>
    </Layout>
  );
};

export default Main;
