import React from "react";
import Layout from "../../popit-ui/Layout";
import styled from "styled-components";
import NoticePop from "../../popit-ui/Noticepop";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Test = () => {
  return (
    <Layout gradation>
      hi
      <Modal>
        <NoticePop />
      </Modal>
    </Layout>
  );
};

export default Test;
