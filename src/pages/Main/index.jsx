import React from "react";
import Layout from "../../popit-ui/Layout";
import ToggleButton from "../../popit-ui/ToggleButton";
import { useState } from "react";
import Pop from "../../popit-ui/Pop";
import cat from "../../assets/image/babo-cat.png";
import MainHeader from "../../popit-ui/MainHeader/index";

const Main = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <Layout white>
      <MainHeader page="main" />
    </Layout>
  );
};

export default Main;
