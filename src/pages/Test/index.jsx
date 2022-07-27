import React, { useEffect } from "react";
import Layout from "../../popit-ui/Layout";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import { useState } from "react";
import SelectPopUp from "../../popit-ui/SelectPopUp";
import Margin from "../../popit-ui/Margin";
import InputPopUp from "../../popit-ui/InputPopUp";
import CategoryPopUp from "../../popit-ui/CategoryPopUp";

const Test = (props) => {
  return (
    <Layout gradation>
      <CategoryPopUp title="보관함 목록" buttonContent="선택"></CategoryPopUp>
      <InputPopUp></InputPopUp>
    </Layout>
  );
};

export default Test;
