import React, { useState } from "react";
import Modal from "../../popit-ui/Modal";
import styled from "styled-components";
import Layout from "../../popit-ui/Layout";
import MainHeader from "../../popit-ui/MainHeader";
import { useParams } from "react-router-dom";
import Pop from "../../popit-ui/Pop";
import Flex from "./../../popit-ui/Flex/index";
import Margin from "../../popit-ui/Margin";
import Typography from "../../popit-ui/Typography";
import { IoChevronForwardSharp } from "react-icons/io5";
import theme from "../../assets/theme";

const PopContainer = styled(Flex)`
  margin-top: 10px;
`;

const MoreContainer = styled(Flex)`
  margin-left: 300px;
  margin-top: 30px;
  cursor: pointer;
`;

const CategoryPopList = () => {
  const [clickMore, setClickMore] = useState(false);
  const { title } = useParams();

  const onMoreClick = () => {
    setClickMore(true);
  };
  return (
    <Layout white>
      <MainHeader page="others" title={title} />
      <MoreContainer onClick={onMoreClick} direction="row">
        <Typography regular12 color="middlegray">
          더보기
        </Typography>
        <Margin width="3px" />
        <IoChevronForwardSharp size={12} color={theme.colors.middlegray} />
      </MoreContainer>
      <PopContainer direction="column" align="center">
        {/* 나중에 axios로 카테고리에 속하는 pop get 해와서 map으로 연결.. */}
        <Pop
          small
          src="https://i.pinimg.com/564x/93/4a/c4/934ac4da0339aa7531d080e713ea211c.jpg"
        >
          수소의 원소기호는 1번입니다.
        </Pop>
        <Margin height="10px" width="100%" />
        <Pop
          small
          src="https://i.pinimg.com/564x/ea/98/d9/ea98d92347f8fe73673024915bc10107.jpg"
        >
          토익은 어려워
        </Pop>
      </PopContainer>

      {clickMore ? (
        <Modal
          type="selectPopUp"
          clickMore={clickMore}
          setClickMore={setClickMore}
          size="extraLarge"
          first="최신 순"
          second="좋아요 순"
          third="댓글 순"
          title="분류"
        />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default CategoryPopList;
