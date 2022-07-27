import React, { useState } from "react";
import Margin from "../../popit-ui/Margin";
import styled, { keyframes } from "styled-components";
import Layout from "../../popit-ui/Layout";
import MainHeader from "../../popit-ui/MainHeader";
import ChatList from "./../../popit-ui/ChatList";
import { Alert } from "./../../popit-ui/Alert";

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
  animation-name: ${slideIn};
  animation-duration: 0.6s;
  animation-iteration-count: 1;
`;

// api 연동시 map으로 구현해야됨
const MyChatList = () => {
  const onDelete = () => {
    Alert("삭제되었습니다");
  };

  return (
    <Layout white>
      <AnimationBox>
        <MainHeader page="others" title="나의 댓글 목록" />
        <Margin height="10px" width="100%" />
        <ChatList
          name="홍길동"
          chat="Narcissistic, my god, I love it"
          button
          onDelete={onDelete}
        />
        <ChatList
          name="홍길동"
          chat="서로를 비춘 밤"
          button
          onDelete={onDelete}
        />
        <ChatList
          name="홍길동"
          chat="아름다운 까만 눈빛 더 빠져 깊이"
          button
          onDelete={onDelete}
        />
        <ChatList
          name="홍길동"
          chat="넌 내게로, 난 네게로"
          button
          onDelete={onDelete}
        />
        <ChatList
          name="홍길동"
          chat="숨 참고 Love Dive"
          button
          onDelete={onDelete}
        />
      </AnimationBox>
    </Layout>
  );
};

export default MyChatList;
