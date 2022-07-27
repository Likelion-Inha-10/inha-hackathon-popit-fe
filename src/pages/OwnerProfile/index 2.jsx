import React from "react";
import ProfileDetail from "./components";
import { useNavigate } from "react-router-dom";

const OwnerProfile = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile-edit");
  };
  return <ProfileDetail onClickEvent={onClick} />;
};

export default OwnerProfile;
