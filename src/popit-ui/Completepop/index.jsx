import styled from "styled-components";
import Flex from "../Flex";
import Button from "./../Button/index";
import Typography from "./../Typography/index";

const Container = styled(Flex)`
  background-color: white;
  width: 280px;
  height: 150px;
  border-radius: 16px;
  margin-top: ${(props) => (props.margintop ? props.margintop : "none")};
  margin-left: ${(props) => (props.marginleft ? props.marginleft : "none")};
  margin-right: ${(props) => (props.marginright ? props.marginright : "none")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "none"};
`;

const Wrapper = styled(Flex)`
  width: 280px;
  height: 150px;
  margin-top: 50px;
`;

const Buttonwrapper = styled(Flex)`
  padding-top: 30px;
  padding-bottom: 20px;
`;

const Completepop = (props) => {
  return (
    <Container
      direction="column"
      justify="space-around"
      margintop={props.margintop}
      marginleft={props.marginleft}
      marginright={props.marginright}
      marginbottom={props.marginbottom}
    >
      <Wrapper justify="flex-end" direction="column">
        <Typography bold16 center>
          {props.content}
        </Typography>
        <Typography regular12 center>
          {props.subcontent}
        </Typography>
        <Buttonwrapper justify="space-around">
          <Button medium>확인</Button>
        </Buttonwrapper>
      </Wrapper>
    </Container>
  );
};

export default Completepop;
