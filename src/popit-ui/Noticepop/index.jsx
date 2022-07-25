import styled from "styled-components";
import Flex from "../Flex";
import Button from "./../Button/index";
import Typography from "./../Typography/index";

const Container = styled(Flex)`
  background-color: pink;
  width: 300px;
  height: 150px;
  border-radius: 16px;
`;
const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  width: 80%;
  align-items: flex-end;
  padding-bottom: 5%;
  padding-left: 8%;
  padding-right: 5%;
`;
const Noticepop = () => {
  return (
    <Container>
      <Typography bold16>이 팝 보관함을 삭제하시겠습니까?</Typography>
      <Wrapper>
        <Button white medium />
        <Button medium />
      </Wrapper>
    </Container>
  );
};

export default Noticepop;
