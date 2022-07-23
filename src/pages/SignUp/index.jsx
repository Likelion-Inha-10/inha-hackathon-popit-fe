import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundBox from "../../popit-ui/RoundBox";
import Typography from "./../../popit-ui/Typography/index";
import Margin from "../../popit-ui/Margin";
import Button from "../../popit-ui/Button";
import Flex from "../../popit-ui/Flex";
import Layout from "../../popit-ui/Layout";
import FirstHeader from "./../../popit-ui/FirstHeader/index";
import Input from "../../popit-ui/Input";

const SignUp = () => {
  const navigate = useNavigate();

  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPasswordCheck, setPasswordCheck] = useState("");

  // const handleName = (e) => {
  //   console.log(e.target.value);
  // };

  const onClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Layout gradation>
        <FirstHeader onClick={onClick} popit back />
        <RoundBox down height="775px" white>
          <Flex direction="column" align="center">
            <Margin height="160px" />
            <Typography color="gray" center title underline>
              회원가입
            </Typography>
            <Margin height="40px" />
            <Input type="text" placeholder="이름을 입력해주세요." />
            <Margin height="20px" />
            <Input
              type="email"
              placeholder="사용하실 이메일(아이디)을 입력해주세요."
            />
            <Margin height="20px" />
            <Input
              type="password"
              placeholder="사용하실 비밀번호를 입력해주세요."
            />
            <Margin height="20px" />
            <Input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
            />
            <Margin height="30px" width="100%" />
            <Button>가입하기</Button>
          </Flex>
        </RoundBox>
      </Layout>
    </>
  );
};

export default SignUp;
