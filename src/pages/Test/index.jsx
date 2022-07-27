import React, { useEffect } from "react";
import Layout from "../../popit-ui/Layout";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import { useState } from "react";
import SelectPopUp from "../../popit-ui/SelectPopUp";
const Test = (props) => {
  return (
    <>
      <Layout gradation>
        <SelectPopUp></SelectPopUp>
      </Layout>
    </>
  );
};

export default Test;
