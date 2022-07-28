import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../../popit-ui/ProfileIcon";
import MainHeader from "./../../../popit-ui/MainHeader/index";
import { MdOutlineModeEdit } from "react-icons/md";
import styled from "styled-components";
import Flex from "../../../popit-ui/Flex";

const StyledCircle = styled(Flex)`
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 10px 2px rgb(0, 0, 0, 0.15);
  height: 26px;
  width: 26px;
  position: relative;
  bottom: 20px;
  left: 35px;
  z-index: 1;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
`;

const PhotoEdit = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/owner-profile");
  };

  return (
    <>
      <MainHeader page="profile" onButtonClick={onButtonClick} />
      <ProfileWrapper>
        <ProfileIcon size90 />
        <StyledCircle align="center" justify="center">
          <MdOutlineModeEdit size="15px" />
        </StyledCircle>
      </ProfileWrapper>
    </>
  );
};

export default PhotoEdit;
