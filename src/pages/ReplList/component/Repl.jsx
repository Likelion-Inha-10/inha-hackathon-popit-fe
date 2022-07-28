import React from "react";
import styled from "styled-components";
import Margin from "../../../popit-ui/Margin";
import ChatList from "../../../popit-ui/ChatList";

const ChatlistWrapper = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Repl = () => {
  return (
    <>
      <ChatlistWrapper>
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/564x/bd/ff/19/bdff1975dbbf0315aaf87a923d13759a.jpg"
          name="홍길동"
          chat="HTML은 프로그래밍 언어가 맞다고 생각하는데요?"
        />
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/736x/c9/3a/45/c93a4519b99dee61361f863db6318841.jpg"
          name="김멋사"
          chat="흥미롭네요"
        />
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/736x/ea/6a/f2/ea6af2d4f6ab7bd239d7ef5b6871f0ab.jpg"
          name="동그라미"
          chat="H 투더 T 투더 ML~"
        />
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/564x/38/ac/8e/38ac8ef6e4b63a525b6a54ae36c7afae.jpg"
          name="???"
          chat="동의합니다."
        />
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/564x/38/ac/8e/38ac8ef6e4b63a525b6a54ae36c7afae.jpg"
          name="???"
          chat="듣는 HTML 입장도 생각해주시죠."
        />
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/564x/38/ac/8e/38ac8ef6e4b63a525b6a54ae36c7afae.jpg"
          name="???"
          chat="동의합니다."
        />
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/564x/38/ac/8e/38ac8ef6e4b63a525b6a54ae36c7afae.jpg"
          name="???"
          chat="동의합니다."
        />
        <Margin height="10px" width="100%" />
        <ChatList
          backImage="https://i.pinimg.com/564x/38/ac/8e/38ac8ef6e4b63a525b6a54ae36c7afae.jpg"
          name="???"
          chat="동의합니다."
        />
      </ChatlistWrapper>
    </>
  );
};

export default Repl;
