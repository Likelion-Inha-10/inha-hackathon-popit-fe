import styled from "styled-components";
import Flex from "../Flex";
import Button from "./../Button/index";
import Typography from "./../Typography/index";

const Container = styled(Flex)`
  background-color: black;
  width: 300px;
  height: 150px;
  border-radius: 16px;
`;
const Wrapper = styled.div``;
const Noticepop = () => {
  return (
    <Container>
      <Wrapper>
        <Button medium />
      </Wrapper>
    </Container>
  );
};

export default Noticepop;
