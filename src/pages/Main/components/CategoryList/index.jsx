import React from "react";
import Typography from "../../../../popit-ui/Typography";
import Margin from "../../../../popit-ui/Margin";
import ProfileIcon from "../../../../popit-ui/ProfileIcon/index";
import styled from "styled-components";
import cat from "../../../../assets/image/babo-cat.png";
import Flex from "../../../../popit-ui/Flex";

const Category = styled(Flex)``;

const CategoryWrapper = styled(Flex)`
  height: 80px;
  width: 100%;
  padding: 20px;
  overflow: scroll;
`;

const CategoryList = () => {
  return (
    <div>
      <CategoryWrapper>
        <Category align="center" direction="column">
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryWrapper>
    </div>
  );
};

export default CategoryList;
