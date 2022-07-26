import React from "react";
import ProfileDetail from "./components";

const OwnerProfile = () => {
  const onClick = () => {
    navigate("/profile-edit");
  };
  return <ProfileDetail />;
};

export default OwnerProfile;
