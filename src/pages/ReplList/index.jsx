import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../popit-ui/Layout";
import MainHeader from "../../popit-ui/MainHeader";
import ChatList from "../../popit-ui/ChatList";
import Post from "./component/Post";
import Margin from "../../popit-ui/Margin";
import Repl from "./component/Repl";
import { TbSend } from "react-icons/tb";
import Modal from "./../../popit-ui/Modal/index";
import { Alert } from "./../../popit-ui/Alert/index";

const Wrapper = styled.div`
  position: relative;
  border-top: 1px #eaeaea solid;
  padding: 20px 5px 20px 20px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReplInputWrapper = styled.div`
  padding: 5px;
  width: 300px;
  height: 30px;
  border: none;
  background-color: #f7f7f7;
  border-radius: 50px;
`;

const ReplInput = styled.input`
  margin: 5px 10px 5px 10px;
  width: 80%;
  background: transparent;
  outline: 0;
  border: none;
  ::placeholder {
    color: lightgrey;
  }
  font-family: "NanumSquareR";
`;

const ButtonWrapper = styled.div``;

const ReplList = ({ api }) => {
  const [repl, setRepl] = useState("");
  const onSubmit = () => {
    Alert("작성되었습니다");
    setRepl("");
    //나중에 axios post?로 연결
  };
  const onTyping = (e) => {
    setRepl(e.target.value);
  };

  return (
    <div>
      <Layout white>
        <MainHeader page="others" title="댓글" />
        <Post />
        <Repl />
        <Wrapper>
          <ReplInputWrapper>
            <ReplInput
              value={repl}
              onChange={onTyping}
              placeholder="댓글 달기"
            />
          </ReplInputWrapper>
          <Margin width="20px" height="100%" />
          <ButtonWrapper onClick={onSubmit}>
            <TbSend color="#FFA751" size="20" />
          </ButtonWrapper>
        </Wrapper>
      </Layout>
    </div>
  );
};

export default ReplList;
