import React, { useEffect } from "react";
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
import axios from "axios";
import { GiConsoleController } from "react-icons/gi";

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
  background-image: url(${(props) => props.src || cat});
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

const CategoryList = (props, { api }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/view_all_category`)
      .then((response) => {
        console.log(response.data);
        setAllCategory(response.data);
      });
  }, []);

  const navigate = useNavigate();

  // const [categories, setCategories] = useState(
  //   _.map(allCategory, (category) => ({
  //     ...category,
  //     selected: false,
  //   }))
  // );

  const onCategoryClick = (e) => {
    setAllCategory(
      _.map(allCategory, (category) => {
        if (category.id == e.currentTarget.id) {
          if (category.selected) {
            return { ...category, selected: false };
          } else {
            return { ...category, selected: true };
          }
        }
        return { ...category };
      })
    );
  };

  const onClick = () => {
    var numberOfSelected = 0;

    _.map(allCategory, (category) => {
      if (category.selected) {
        numberOfSelected++;
      }
    });
    if (numberOfSelected < 3) {
      Alert("3개 이상 선택해주세요.");
    } else {
      let temp = [];
      _.map(allCategory, (category) => {
        if (category.selected === true) {
          const idObject = {
            category_id: category.id,
          };
          temp.push(idObject);
        }
      });
      setSelectedCategory([...temp]);
      console.log(temp);

      // navigate("/main");
    }
  };

  useEffect(() => {
    if (selectedCategory.length > 0) {
      axios.post(`${process.env.REACT_APP_API}/set_category`, {
        selectedCategory,
      });
      console.log("성공");

      axios
        .get(`${process.env.REACT_APP_API}/view_category`)
        .then((response) => {
          console.log(response.data);
        });

      // navigate("/main");
    }
  }, [selectedCategory]);

  return (
    <>
      <Wrapper>
        <CircleButton right="270px" down="525px" onClick={onClick} />

        <Container>
          {_.map(allCategory, (category) => (
            <Category
              key={category.id}
              title={category.category_name}
              id={category.id}
              onClick={onCategoryClick}
              direction="column"
              justify="center"
            >
              <CategoryPhoto src={category.category_image}>
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
                {category.category_name}
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
