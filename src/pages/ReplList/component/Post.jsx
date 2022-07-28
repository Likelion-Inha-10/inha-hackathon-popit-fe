import React from "react";
import Typography from "../../../popit-ui/Typography/index";
import Flex from "../../../popit-ui/Flex";
import Margin from "../../../popit-ui/Margin/index";
import styled from "styled-components";
import ProfileIcon from "../../../popit-ui/ProfileIcon";

const Wrapper = styled(Flex)`
  padding: 30px 20px 30px 20px;
  border-bottom: 1px #eaeaea solid;
`;

const Post = () => {
  return (
    <Wrapper direction="row">
      <ProfileIcon size48 />
      <Margin width="15px" height="100%" />
      <Flex direction="column" justify="space-around">
        <Flex direction="row" align="center">
          <Typography bold12>홍길동</Typography>
          <Margin width="5px" height="100%" />
          <Typography bold12 color="middlegray">
            |
          </Typography>
          <Margin width="5px" height="100%" />
          <Typography bold12 color="middlegray">
            개발
          </Typography>
        </Flex>
        <Typography regular14>HTML은 프로그래밍 언어가 아니다.</Typography>
      </Flex>
    </Wrapper>
  );
};

export default Post;
