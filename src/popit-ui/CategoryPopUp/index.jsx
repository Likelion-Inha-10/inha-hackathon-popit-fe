import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Typography from "../Typography";
import Margin from "../Margin";
import ProfileIcon from "../ProfileIcon";
import Alert from "../Alert";
import _ from "lodash";
import categoryData from "../../assets/data/categoryData";
import { BsCheck2 } from "react-icons/bs";
import theme from "../../assets/theme";
import cat from "../../assets/image/babo-cat.png";

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

const Dimmer = styled(Flex)`
  height: 100%;
  width: 100%;
  z-index: -1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  ${(props) =>
    props.selected
      ? `
  background-color: rgba(0, 0, 0, 0.5);
  
  `
      : `
  background-color: none
  
  `}
`;

const CategoryPhoto = styled.div`
  overflow: hidden;
  background-image: url(${cat});
  background-size: contain;
  height: 72px;
  width: 72px;
  border-radius: 50px;
`;

const Dimmer2 = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const CategoryPopUp = (props) => {
  console.log(categoryData);
  const [categories, setCategories] = useState(
    _.map(categoryData, (category) => ({
      ...category,
      selected: false,
    }))
  );

  const onCategoryClick = (e) => {
    setCategories(
      _.map(categories, (category) => {
        if (category.id == e.currentTarget.id) {
          if (category.selected) return { ...category, selected: false };
          return { ...category, selected: true };
        }
        return { ...category };
      })
    );
  };

  const onPopUpCategory = () => {
    if (props.popSave == true) {
      props.setPopSave(!props.popSave);
      Alert("보관함에 팝을 저장했습니다.");
    } else {
      props.setSelectCategory(!props.selectCategory);
      Alert("저장할 보관함을 선택하였습니다.");
    }
  };

  const onClick = () => {
    var numberOfSelected = 0;

    _.map(categories, (category) => {
      if (category.selected) {
        numberOfSelected++;
      }
    });
    if (numberOfSelected >= 2) {
      Alert("1개만 선택해주세요.");
    } else {
      onPopUpCategory();
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
              onClick={onClick}
              style={{ cursor: "pointer" }}
              regular16
              color="orange"
            >
              {props.buttonContent}
            </Typography>
          </ButtonWrapper>
          <Margin height="23px" />
          <CategoryWrapper>
            {_.map(categories, (category) => (
              <Category
                key={category.id}
                title={category.title}
                id={category.id}
                onClick={onCategoryClick}
                direction="column"
                align="center"
              >
                <CategoryPhoto>
                  <Dimmer justify="center" align="center">
                    {category.selected ? (
                      <Dimmer2 justify="center" align="center">
                        <BsCheck2 size={35} color={theme.colors.main} />
                      </Dimmer2>
                    ) : (
                      <></>
                    )}
                  </Dimmer>
                </CategoryPhoto>
                <Margin height="10px" />
                <Typography regular12 center>
                  {category.title}
                </Typography>
              </Category>
            ))}
          </CategoryWrapper>
        </Container>
      </Wrapper>
    </div>
  );
};

export default CategoryPopUp;
