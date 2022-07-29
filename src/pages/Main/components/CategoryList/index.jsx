import React, { useState, useEffect } from "react";
import Typography from "../../../../popit-ui/Typography";
import Margin from "../../../../popit-ui/Margin";
import ProfileIcon from "../../../../popit-ui/ProfileIcon/index";
import styled from "styled-components";
import cat from "../../../../assets/image/babo-cat.png";
import Flex from "../../../../popit-ui/Flex";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../../../../popit-ui/Alert";

const Category = styled(Flex)`
  cursor: pointer;
`;
const CategoryWrapper = styled(Flex)`
  height: 120px;
  padding: 20px;
  overflow: auto;
`;

const CategoryContainer = styled(Flex)``;

const CategoryList = (props) => {
  const navigate = useNavigate();
  const [allCategory, setAllCategory] = useState([]);

  const moveToCategory = () => {
    Alert("착한사람한테만 보이는 창");
  };
  return (
    <CategoryWrapper>
      <CategoryContainer>
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon
            size48
            backImage="http://172.105.201.195:8000/media/ch.jpg"
          />
          <Margin height="10px" />
          <Typography regular12>IT</Typography>
        </Category>
        <Margin width="10px" />
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon
            size48
            backImage="http://172.105.201.195:8000/media/Sports.jpg"
          />
          <Margin height="10px" />
          <Typography regular12>스포츠</Typography>
        </Category>
        <Margin width="10px" />
        <Category align="center" direction="column" onClick={moveToCategory}>
          <ProfileIcon
            size48
            backImage="http://172.105.201.195:8000/media/Health.png"
          />
          <Margin height="10px" />
          <Typography regular12>Health</Typography>
        </Category>
        <Margin width="10px" />
      </CategoryContainer>
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
