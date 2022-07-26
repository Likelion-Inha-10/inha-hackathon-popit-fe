import React from "react";
import styled from "styled-components";
import ChatList from "../../popit-ui/ChatList";
import Layout from "../../popit-ui/Layout";

const Hamburger = () => {
  return (
    <Layout white>
      <ChatList name="홍길동" chat="배고파" button />
      <ChatList name="김멋사" chat="밥먹어" button />
      <ChatList name="라이언킹" chat="가나다라마바사" />
    </Layout>
  );
};

export default Hamburger;
