import React from "react";
import Noticepop from "./../../popit-ui/Noticepop/index";
import Layout from "./../../popit-ui/Layout";
import Completepop from "../../popit-ui/Completepop";

const Main = () => {
  return (
    <Layout white>
      <Noticepop content="안녕하세요" />
      <Completepop content="안녕하세요" subcontent="저는 " />
    </Layout>
  );
};

export default Main;
