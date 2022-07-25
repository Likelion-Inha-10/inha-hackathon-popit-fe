import React from "react";
import Layout from "./../../popit-ui/Layout";
import Inputpopup from "./../../popit-ui/Inputpopup/index";
import Categoryicon from "../../popit-ui/Categoryicon";
import dog from "../../popit-ui/Categoryicon/dog.png";
const Main = () => {
  return (
    <Layout white>
      <Categoryicon image={dog}></Categoryicon>
    </Layout>
  );
};

export default Main;
