import React from "react";
import Layout from "../../popit-ui/Layout";
import { useState } from "react";
import MainHeader from "../../popit-ui/MainHeader/index";
import CategoryList from "./components/CategoryList";

const Main = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <Layout white>
      <MainHeader page="main" />
      <CategoryList />
    </Layout>
  );
};

export default Main;
