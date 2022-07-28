import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Typography from "../Typography";
import Margin from "../Margin";
import ProfileIcon from "../ProfileIcon";
import Alert from "../Alert";

const Wrapper = styled(Flex)`
  width: 375px;
  height: 320px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0 rgb(0, 0, 0, 0.1);
  z-index: 3px;
`;

const Container = styled(Flex)`
  height: 300px;
  width: 326px;
`;

const ButtonWrapper = styled(Flex)`
  width: 100%;
  height: 22px;
`;

const Category = styled(Flex)``;
const CategoryWrapper = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 24px;

  width: 90%;
  height: 260px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryPopUp = (props) => {
  const onPopUpCategory = () => {
    if (props.popSave == true) {
      props.setPopSave(!props.popSave);
      Alert("보관함에 팝을 저장했습니다.");
    } else {
      props.setSelectCategory(!props.selectCategory);
      Alert("저장할 보관함을 선택하였습니다.");
    }
  };

  return (
    <div>
      <Wrapper
        onClick={(e) => e.stopPropagation()}
        clickMore={props.clickMore}
        setClickMore={props.setClickMore}
        selectCategory={props.selectCategory}
        setSelectCategory={props.setSelectCategory}
        popSave={props.popSave}
        setPopSave={props.setPopSave}
        title={props.title}
        buttonContent={props.buttonContent}
        align="flex-end"
        justify="center"
      >
        <Container direction="column" align="center">
          <ButtonWrapper justify="space-between" align="center">
            <Margin width="26px" />
            <Typography bold20>{props.title}</Typography>
            <Typography
              style={{ cursor: "pointer" }}
              onClick={() => onPopUpCategory()}
              regular16
              color="orange"
            >
              {props.buttonContent}
            </Typography>
          </ButtonWrapper>
          <Margin height="23px" />
          <CategoryWrapper>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
            <Category direction="column" align="center">
              <ProfileIcon size72 />
              <Margin height="10px" />
              <Typography regular12>보관함1</Typography>
            </Category>
          </CategoryWrapper>
        </Container>
      </Wrapper>
    </div>
  );
};

export default CategoryPopUp;
