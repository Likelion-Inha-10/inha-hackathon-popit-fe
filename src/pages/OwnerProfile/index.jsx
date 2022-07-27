import React from "react";
import ProfileDetail from "./components";
import { useNavigate } from "react-router-dom";
import Layout from "./../../popit-ui/Layout/index";
import MainHeader from "../../popit-ui/MainHeader";

const OwnerProfile = () => {
  const navigate = useNavigate();

  const onClickEvent = () => {
    navigate("/profile-edit");
  };

  return (
    <Layout white>
      <MainHeader page="others" title="프로필" />
      <ProfileDetail onClickEvent={onClickEvent} />
    </Layout>
  );
};

export default OwnerProfile;
