import React, { useState } from "react";
import Layout from "../../popit-ui/Layout";
import MainHeader from "../../popit-ui/MainHeader";
import Pop from "../../popit-ui/Pop";
import styled from "styled-components";
import Flex from "../../popit-ui/Flex";
import Typography from "../../popit-ui/Typography";
import Margin from "../../popit-ui/Margin";
import { IoChevronDownSharp } from "react-icons/io5";
import theme from "../../assets/theme";
import Modal from "../../popit-ui/Modal";

const Wrapper = styled(Flex)`
  height: 793px;
  overflow: auto;
`;
const PopContainer = styled(Flex)``;
const ClassificationWrapper = styled(Flex)`
  height: 60px;
  width: 80%;
`;

const Classification = styled(Flex)`
  height: 40px;
  cursor: pointer;
`;

const MorePop = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [classify, setClassify] = useState(false);

  const onMoreClick = ({ api }) => {
    setClassify(true);
  };

  return (
    <div>
      <Layout white>
        {classify ? (
          <Modal
            first="오늘의 팝"
            firstMessage="오늘의 팝이 표시됩니다."
            second="오늘 뜨는 팝"
            secondMessage="오늘 뜨는 팝이 표시됩니다."
            third="나에게 맞는 팝"
            thirdMessage="나에게 맞는 팝이 표시됩니다."
            size="large"
            title="분류"
            classify={classify}
            setClassify={setClassify}
            type="selectPopUp"
          />
        ) : (
          <></>
        )}
        <MainHeader page="others" title="팝 더보기" />

        <Wrapper direction="column" align="center">
          <ClassificationWrapper align="flex-end" justify="flex-end">
            <Classification align="flex-end" onClick={onMoreClick}>
              <Typography regular12 color="middlegray">
                분류
              </Typography>
              <Margin width="4px" />
              <IoChevronDownSharp size={14} color={theme.colors.middlegray} />
            </Classification>
          </ClassificationWrapper>
          <PopContainer direction="column" align="center">
            <Margin height="10px" />

            <Pop small />
            <Margin height="10px" />
          </PopContainer>
          <PopContainer direction="column" align="center">
            <Margin height="10px" />

            <Pop small />
            <Margin height="10px" />
          </PopContainer>
        </Wrapper>

        {/* 여긴 더보기를 누르면 나오는 페이지
        <br />
        url파라미터를 이용한다. 오늘의 팝 = 1, 오늘 뜨는 = 2, 나에게맞는 =
        3으로하고 navigate("more-pop/:mainCategoryId) 형식으로 전달하여 이
        페이지를 로딩한다
        <br />
        백에서는 이 3개의 카테고리안에 pop들을 넣어주고 프론트는 map으로 팝을
        풀어내기만하면된다. */}
      </Layout>
    </div>
  );
};

export default MorePop;
