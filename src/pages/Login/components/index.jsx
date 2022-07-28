import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../../popit-ui/Flex";
import Margin from "./../../../popit-ui/Margin/index";
import Typography from "./../../../popit-ui/Typography/index";
import Button from "./../../../popit-ui/Button/index";
import RoundBox from "./../../../popit-ui/RoundBox/index";
import Alert from "../../../popit-ui/Alert";
import Input from "../../../popit-ui/Input";

const LogoContainer = styled.div`
  position: relative;
  top: 120px;
  text-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
  text-align: center;
`;

const TextWrapper = styled.div`
  position: relative;
  top: 130px;
  text-align: center;
`;
const BoxWrapper = styled(Flex)`
  padding: 250px 0px 0px 0px;
`;

const ButtonWrapper = styled(Flex)`
  padding-top: 160px;
`;
const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

const LoginList = () => {
  const navigate = useNavigate();
  const [userId, setId] = useState("");
  const [userPassword, setPassword] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickNew = () => {
    navigate("/sign-up");
  };

  const onClickSubmit = () => {
    if (!userId || !userPassword) {
      Alert("모든 항목을 입력해주세요.");
    } else {
      //api 연동 필요 // Signup과 같음
      navigate("/first-choice");
    }
  };

  return (
    <>
      <LogoContainer>
        <Typography bold color="white" size="32px">
          POP IT!
        </Typography>
      </LogoContainer>
      <TextWrapper>
        <Typography color="white" small>
          내 손 안의 포스트잇, 팝잇
        </Typography>
      </TextWrapper>
      <BoxWrapper direction="column">
        <RoundBox white down height="555px">
          <ButtonWrapper direction="column" align="center">
            <Input
              onChange={onChangeId}
              type="text"
              placeholder="아이디를 입력해주세요."
            />
            <Margin height="10px" />
            <Input
              onChange={onChangePassword}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <Margin height="30px" />
            <Button large onClick={onClickSubmit}>
              로그인
            </Button>
          </ButtonWrapper>
          <Margin height="120px" />
          <Typography underline center regular16 onClick={onClickNew}>
            회원가입
          </Typography>
        </RoundBox>
      </BoxWrapper>
    </>
  );
};
export default LoginList;
