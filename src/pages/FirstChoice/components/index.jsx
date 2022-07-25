import React from "react";
import styled from "styled-components";
import Flex from "../../../popit-ui/Flex";
import Typography from "../../../popit-ui/Typography";
import Margin from "../../../popit-ui/Margin/index";
import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import theme from "../../../assets/theme";
import categoryData from "../../../assets/data/categoryData";
import _ from "lodash";
import cat from "./babo-cat.png";
import CircleButton from "../../../popit-ui/CircleButton";
import { useNavigate } from "react-router-dom";
import Alert from "../../../popit-ui/Alert";

const Wrapper = styled.div`
  position: relative;
  height: 616px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 24px;
  column-gap: 16px;
`;

const Category = styled(Flex)``;

const CategoryPhoto = styled.div`
  overflow: hidden;
  background-image: url(${cat});
  background-size: contain;
  height: 96px;
  width: 96px;
  border-radius: 50px;
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

const CategoryList = (props) => {
  const navigate = useNavigate();

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

  const onClick = () => {
    var numberOfSelected = 0;

    _.map(categories, (category) => {
      if (category.selected) {
        numberOfSelected++;
      }
    });
    if (numberOfSelected < 3) {
      Alert("3개 이상 선택해주세요.");
    } else {
      navigate("/main");
    }
  };

  return (
    <>
      <Wrapper>
        <CircleButton onClick={onClick} />
        <img src="babo-cat.jpeg" />
        <Container>
          {_.map(categories, (category) => (
            <Category
              key={category.id}
              title={category.title}
              id={category.id}
              onClick={onCategoryClick}
              direction="column"
              justify="center"
            >
              <CategoryPhoto>
                <Dimmer
                  justify="center"
                  align="center"
                  selected={category.selected}
                >
                  {category.selected ? (
                    <BsCheck2 size={45} color={theme.colors.main} />
                  ) : (
                    <></>
                  )}
                </Dimmer>
              </CategoryPhoto>
              <Margin height="8px" />
              <Typography small center>
                {category.title}
              </Typography>
            </Category>
          ))}
        </Container>
        <Margin height="100px" />
      </Wrapper>
    </>
  );
};

export default CategoryList;
