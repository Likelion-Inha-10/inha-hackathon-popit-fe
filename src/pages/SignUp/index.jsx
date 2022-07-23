import { React } from "react";
import { useNavigate } from "react-router-dom";
import RoundBox from "../../popit-ui/RoundBox";
import Layout from "../../popit-ui/Layout";
import FirstHeader from "./../../popit-ui/FirstHeader/index";
import SignUpList from "./components";

const SignUp = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/login");
  };

  return (
    <>
      <Layout gradation>
        <FirstHeader onClick={onClickBack} popit back />
        <RoundBox down height="780px" white>
          <SignUpList />
        </RoundBox>
      </Layout>
    </>
  );
};

export default SignUp;
