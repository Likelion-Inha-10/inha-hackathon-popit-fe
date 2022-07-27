import React from "react";
import Typography from "../../../../popit-ui/Typography";
import Margin from "../../../../popit-ui/Margin";
import ProfileIcon from "../../../../popit-ui/ProfileIcon/index";
import styled from "styled-components";
import cat from "../../../../assets/image/babo-cat.png";
import Flex from "../../../../popit-ui/Flex";
import { useNavigate } from "react-router-dom";

const Category = styled(Flex)``;
const CategoryWrapper = styled(Flex)`
  height: 120px;
  padding: 20px;
  overflow: auto;
`;

const CategoryContainer = styled(Flex)``;

const CategoryList = (props) => {
  const navigate = useNavigate();

  const moveToCategory = () => {};
  return (
    <CategoryWrapper>
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>{" "}
      {/* <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>{" "}
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>{" "}
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>{" "}
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>{" "}
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>{" "}
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>{" "}
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon size48 backImage={cat} />
          <Margin height="7px" />
          <Typography regular12>화학</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer> */}
    </CategoryWrapper>
  );
};

export default CategoryList;
