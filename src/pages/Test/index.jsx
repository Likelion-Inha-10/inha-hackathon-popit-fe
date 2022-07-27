import React, { useEffect } from "react";
import Layout from "../../popit-ui/Layout";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import { useState } from "react";
import SelectPopUp from "../../popit-ui/SelectPopUp";
import Margin from "../../popit-ui/Margin";

const Test = (props) => {
  return (
    <Layout gradation>
      <SelectPopUp
        type="medium"
        red
        first={1}
        second={2}
        third={3}
      ></SelectPopUp>
      <Margin height="20px" />
      <SelectPopUp type="small" first={1} second={2}></SelectPopUp>
      <Margin height="20px" />

      <SelectPopUp
        type="large"
        title="분류"
        first={1}
        second={2}
        third={3}
      ></SelectPopUp>
    </Layout>
  );
};

export default Test;
