import styled from "styled-components";
import Flex from "../Flex";
import Button from "../Button/index";
import Typography from "../Typography/index";

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
  box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.2);

  width: 280px;
  height: 150px;
  margin-top: 50px;
`;
const ButtonWrapper = styled(Flex)`
  padding-top: 45px;
  padding-bottom: 20px;
`;
const NoticePop = (props) => {
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
        <ButtonWrapper justify="space-around">
          <Button white medium>
            {props.leftButton}
          </Button>
          <Button medium>{props.rightButton}</Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default NoticePop;

/*사용법
-Button 공통적으로 취소/삭제 가 있는 팝업창이 2개 있어서
미리 써 두었습니다! props.content내용만적으면 됩니당
-container margin으로 마구 움직일 수 있음다...*/
