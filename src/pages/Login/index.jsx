import { React } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../popit-ui/Layout";
import LoginList from "./components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout gradation>
        <LoginList />
      </Layout>
    </>
  );
};

export default Login;
