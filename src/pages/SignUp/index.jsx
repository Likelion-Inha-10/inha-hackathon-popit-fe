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
import axios from "axios";
import { TbRecordMailOff } from "react-icons/tb";

const SignUp = ({ api }) => {
  const [login_id, setUserId] = useState("");
  const [nickname, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [re_password, setPasswordCheck] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (!nickname || !login_id || !email || !re_password) {
      Alert("모든 항목을 입력해주세요.");
    } else {
      console.log(`${api}signup`);
      axios(`${api}/signup`, {
        method: "POST",
        header: {
          "content-type": "application/json",
        },
        data: {
          nickname: nickname,
          login_id: login_id,
          email: email,
          re_password: re_password,
        },
      })
        .then(() => {
          setIsPopup(true);
        })
        .catch((e) => {
          console.log(e);
          console.log("실패");
        });
    }
  };

  const onClickBack = () => {
    navigate("/login");
  };

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
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
              value={nickname}
              type="text"
              placeholder="이름을 입력해주세요."
            />
            <Margin height="20px" />{" "}
            <Input
              onChange={onChangeId}
              value={login_id}
              type="text"
              placeholder="사용하실 아이디를 입력해주세요."
            />
            <Margin height="20px" />
            <Input
              onChange={onChangeEmail}
              value={email}
              type="email"
              placeholder="사용하실 이메일을 입력해주세요."
            />
            <Margin height="20px" />
            <Input
              onChange={onChangePassword}
              value={re_password}
              type="password"
              placeholder="사용하실 비밀번호를 입력해주세요."
            />
            <Margin height="20px" />
            <Margin height="20px" />
            <Button onClick={onButtonClick}>가입하기</Button>
          </Flex>
        </RoundBox>
      </Layout>
    </>
  );
};

export default SignUp;
