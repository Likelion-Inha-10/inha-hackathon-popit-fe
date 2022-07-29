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
        <MainHeader page="others" title="팝 보관함" />
        <PopWrapper>
          <PopChest
            title="IT"
            type="edit"
            backImage="https://i.pinimg.com/736x/de/51/29/de51292da99f262ff15232f75a0096fc.jpg"
          />
          <PopChest
            title="스포츠"
            type="edit"
            backImage="https://i.pinimg.com/564x/e9/d4/b8/e9d4b8de421f7470a4fb7f4ab6036909.jpg"
          />
          <PopChest
            title="헬스"
            type="edit"
            backImage="https://i.pinimg.com/564x/9e/eb/8b/9eeb8b456790f135c7b64c4edeef27ff.jpg"
          />
          <PopChest />
        </PopWrapper>
      </AnimationBox>
    </Layout>
  );
};

export default MyPopList;
