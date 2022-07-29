import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Typography from "../../popit-ui/Typography";
import Flex from "../../popit-ui/Flex";
import Margin from "../../popit-ui/Margin";
import Layout from "../../popit-ui/Layout";
import UserProfile from "./components/UserProfile";
import Modal from "../../popit-ui/Modal";

const MenuWrapper = styled(Flex)`
  width: 100%;
  height: 60px;
  border-bottom: 1px #eaeaea solid;
  cursor: pointer;
`;

const Hamburger = () => {
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  const onChestClick = () => {
    navigate("/pop-list");
  };

  const onChatClick = () => {
    navigate("/mychat-list");
  };

  const onLogOutClick = () => {
    setIsPopup(true);
  };

  return (
    <>
      <Layout white>
        {isPopup ? (
          <Modal
            PopModal={isPopup}
            setPopModal={setIsPopup}
            content="로그아웃 하시겠습니까?"
            leftButton="취소"
            rightButton="확인"
            type="noticePopUp"
            usage="로그아웃"
          />
        ) : (
          <></>
        )}
        <UserProfile />
        <MenuWrapper align="center" onClick={onChestClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16>팝 보관함</Typography>
        </MenuWrapper>
        <MenuWrapper align="center" onClick={onChatClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16>나의 댓글 목록</Typography>
        </MenuWrapper>
        <MenuWrapper align="center" onClick={onLogOutClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16 color="warningred">
            로그아웃
          </Typography>
        </MenuWrapper>
      </Layout>
    </>
  );
};

export default Hamburger;
