import Layout from "../../popit-ui/Layout";
import FirstHeader from "../../popit-ui/FirstHeader";
import RoundBox from "../../popit-ui/RoundBox";
import styled from "styled-components";

const FirstChoice = () => {
  return (
    <Layout gradation down>
      <FirstHeader back popit />
      <RoundBox white down height="785px"></RoundBox>
    </Layout>
  );
};

export default FirstChoice;
