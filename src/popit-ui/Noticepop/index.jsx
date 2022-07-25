import styled from "styled-components";
import Flex from "../Flex";
import Button from "./../Button/index";

const Container = styled(Flex)`
  background-color: black;
  width: 300px;
  height: 150px;
  border-radius: 16px;
`;

const Noticepop = () => {
  return (
    <Container>
      <Button medium />
    </Container>
  );
};

export default Noticepop;
