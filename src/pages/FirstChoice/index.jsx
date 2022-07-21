import Layout from "../../popit-ui/Layout";
import FirstHeader from "../../popit-ui/FirstHeader";
import RoundBox from "../../popit-ui/RoundBox";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import Typography from "../../popit-ui/Typography";
import Margin from "../../popit-ui/Margin";

const Wrapper = styled(Flex)``;
const FirstChoice = () => {
  return (
    <Layout gradation down>
      <FirstHeader back popit />
      <RoundBox white down height="785px">
        <Wrapper direction="column" align="center">
          <Typography headline bold300>
            팝 보관 카테고리 3개 선택
          </Typography>
          <Margin height="8px" />
          <Typography center color="darkgray" size="12px">
            보관하고 싶은 공부 분야를 선택하여
            <br />
            나에게 맞는 팝들을 받아보세요.
          </Typography>
        </Wrapper>
      </RoundBox>
    </Layout>
  );
};

export default FirstChoice;
