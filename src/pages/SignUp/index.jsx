import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundBox from "../../popit-ui/RoundBox";
import Layout from "../../popit-ui/Layout";
import FirstHeader from "./../../popit-ui/FirstHeader/index";
import Modal from "../../popit-ui/Modal";
import Button from "../../popit-ui/Button";
import Typography from "../../popit-ui/Typography";
import Margin from "../../popit-ui/Margin";
import Flex from "../../popit-ui/Flex";
import Input from "../../popit-ui/Input";
import Alert from "../../popit-ui/Alert";

const SignUp = () => {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPasswordCheck, setPasswordCheck] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (!userName || !userEmail || !userPassword || !userPasswordCheck) {
      Alert("모든 항목을 입력해주세요.");
    } else if (userPassword !== userPasswordCheck) {
      Alert("비밀번호를 확인해주세요.");
    } else {
      //api 연동 필요
      setIsPopup(!isPopup);
    }
  };

  const onClickBack = () => {
    navigate("/login");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  return (
    <>
      <Layout gradation>
        {isPopup ? (
          <Modal
            completePop={isPopup}
            setCompletePop={setIsPopup}
            content="축하합니다! 가입이 완료되셨습니다!"
            subcontent="로그인 창으로 돌아가 로그인해주시기 바랍니다."
            type="completePopUp"
          />
        ) : (
          <></>
        )}
        <FirstHeader onClick={onClickBack} popit back />
        <RoundBox down height="780px" white>
          <Flex direction="column" align="center">
            <Margin height="160px" />
            <Typography color="gray" center title underline>
              회원가입
            </Typography>
            <Margin height="40px" />
            <Input
              onChange={onChangeName}
              type="text"
              placeholder="이름을 입력해주세요."
            />
            <Margin height="20px" />
            <Input
              onChange={onChangeEmail}
              type="email"
              placeholder="사용하실 이메일(아이디)을 입력해주세요."
            />
            <Margin height="20px" />
            <Input
              onChange={onChangePassword}
              type="password"
              placeholder="사용하실 비밀번호를 입력해주세요."
            />
            <Margin height="20px" />
            <Input
              onChange={onChangePasswordCheck}
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
            />
            <Margin height="20px" />
            <Button onClick={onButtonClick}>가입하기</Button>
          </Flex>
        </RoundBox>
      </Layout>
    </>
  );
};

export default SignUp;
