import React from "react";
import styled, { keyframes } from "styled-components";
import MainHeader from "./../../popit-ui/MainHeader/index";
import Layout from "./../../popit-ui/Layout/index";
import PopChest from "./../../popit-ui/PopChest/index";
import Flex from "./../../popit-ui/Flex/index";
import { useNavigate } from "react-router-dom";

const slideIn = keyframes`
   0%{
    transform: translateX(390px);
  }
  100%{
    transform: translateX(0px);
  }
`;

const AnimationBox = styled.div`
  position: relative;
  /* animation-name: ${slideIn};
  animation-duration: 0.6s;
  animation-iteration-count: 1; */
`;

const PopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px 30px 40px 30px;
`;

const MyPopList = ({ api }) => {
  //const [isClick, setIsClick] = useState(false);
  return (
    <Layout white>
      <AnimationBox>
        <MainHeader page="poplist" title="팝 보관함" />
        <PopWrapper>
          <PopChest title="화학" type="list" />
          <PopChest title="개발" type="list" />
          <PopChest title="토익" type="list" />
          <PopChest title="씨언어" type="list" />
        </PopWrapper>
      </AnimationBox>
    </Layout>
  );
};

export default MyPopList;
