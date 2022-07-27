import styled, { keyframes } from "styled-components";
import Flex from "../Flex";
import Button from "../Button/index";
import Typography from "../Typography/index";
import { useNavigate } from "react-router-dom";
import { Alert } from "./../../popit-ui/Alert/index";
import Margin from "../Margin";

const fadeIn = keyframes`
   from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled(Flex)`
  background-color: white;
  width: 280px;
  height: 150px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.2);
  animation-name: ${fadeIn};
  animation-duration: 300ms;
  animation-iteration-count: 1;
`;

const ButtonWrapper = styled(Flex)`
  padding: 35px 10px 20px 10px;
`;
const NoticePop = (props) => {
  const navigate = useNavigate();
  const onRightClick = () => {
    if (props.usage === "로그아웃") {
      Alert("로그아웃 되었습니다");
      setTimeout(() => {
        navigate(`/login`);
      }, 350);
    }
    if (props.usage === "삭제") {
      Alert("삭제되었습니다");
      props.setPopModal(!props.PopModal);
    }
  };

  const onLeftClick = () => {
    Alert("취소되었습니다");
    props.setPopModal(!props.PopModal);
  };

  return (
    <Container direction="column" justify="space-around">
      <Margin height="50px" width="100%" />
      <Typography bold16 center>
        {props.content}
      </Typography>
      <ButtonWrapper justify="space-around">
        <Button onClick={onLeftClick} white medium>
          {props.leftButton}
        </Button>
        <Button medium onClick={onRightClick}>
          {props.rightButton}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default NoticePop;

/*사용법
-Button 공통적으로 취소/삭제 가 있는 팝업창이 2개 있어서
미리 써 두었습니다! props.content내용만적으면 됩니당
-container margin으로 마구 움직일 수 있음다...*/
