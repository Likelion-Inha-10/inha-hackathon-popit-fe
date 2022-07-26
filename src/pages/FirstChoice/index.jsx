import Layout from "../../popit-ui/Layout";
import FirstHeader from "../../popit-ui/FirstHeader";
import RoundBox from "../../popit-ui/RoundBox";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import Typography from "../../popit-ui/Typography";
import Margin from "../../popit-ui/Margin";
import CategoryList from "./components";

const Wrapper = styled(Flex)`
  padding: 57px 30px 0 30px;
`;

const FirstChoice = () => {
  return (
    <Layout gradation down>
      <FirstHeader back popit />
      <RoundBox white down height="775px">
        <Wrapper direction="column" align="center">
          <Typography headline>팝 보관 카테고리 3개 선택</Typography>
          <Margin height="10px" />
          <Typography small center color="darkgray">
            보관하고 싶은 공부 분야를 선택하여
            <br />
            나에게 맞는 팝들을 받아보세요.
          </Typography>
          <Margin height="45px" />

          <CategoryList />
        </Wrapper>
      </RoundBox>
    </Layout>
  );
};

export default FirstChoice;
