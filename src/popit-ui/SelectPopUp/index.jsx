import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Button from "../Button";
import Margin from "../Margin/index";
import Typography from "../Typography/index";

const Wrapper = styled(Flex)`
  width: 375px;
  height: 232px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0 rgb(0, 0, 0, 0.1);

  ${(props) =>
    props.type == "small" &&
    `
  height: 175px;
  
  ${Container} {
    height: 130px;
  }
  ${ButtonWrapper} {
    height: 104px;
  }
  `};

  ${(props) =>
    props.type == "large" &&
    `
    height: 273px;
  
  ${Container} {
    height: 223px;
  }
  `};

  ${(props) =>
    props.type == "extraLarge" &&
    `
  height: 333px;
  
  ${Container} {
    height: 130px;
  }
  ${ButtonWrapper} {
    height: 104px;
  }
  `};
`;

const Container = styled(Flex)`
  height: 187px;
  width: 100%;
`;
const Bar = styled.div`
  height: 4px;
  width: 60px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.middlegray};
`;

const ButtonWrapper = styled(Flex)`
  height: 160px;
`;

const SelectPopUp = (props) => {
  if (props.type == "medium") {
    return (
      <div>
        <Wrapper
          onClick={props.onClick}
          type={props.type}
          first={props.first}
          second={props.second}
          third={props.third}
          direction="column"
          align="center"
          justify="center"
        >
          <Container direction="column" align="center" justify="space-between">
            <Bar />
            <ButtonWrapper direction="column" justify="space-between">
              <Button whiteGray>{props.first}</Button>
              <Button whiteGray>{props.second}</Button>
              {props.red ? (
                <Button whiteGray redTypo>
                  {props.third}
                </Button>
              ) : (
                <Button whiteGray>{props.third}</Button>
              )}
            </ButtonWrapper>
          </Container>
        </Wrapper>
      </div>
    );
  }

  if (props.type == "small") {
    return (
      <div>
        <Wrapper
          popSave={props.popSave}
          setPopSave={props.setPopSave}
          type={props.type}
          red={props.red}
          first={props.first}
          direction="column"
          align="center"
          justify="center"
          onClick={(e) => e.stopPropagation()}
        >
          <Container direction="column" align="center" justify="space-between">
            <Bar />
            <ButtonWrapper direction="column" justify="space-between">
              <Button
                whiteGray
                onClick={() => {
                  props.setClickMore(!props.clickMore);
                  props.setPopSave(!props.popSave);
                }}
              >
                {props.first}
              </Button>
              {props.red ? (
                <Button
                  onClick={() => {
                    props.setClickMore(!props.clickMore);
                  }}
                  whiteGray
                  redTypo
                >
                  {props.second}
                </Button>
              ) : (
                <Button
                  onClick={() => props.setClickMore(!props.clickMore)}
                  whiteGray
                >
                  {props.second}
                </Button>
              )}
            </ButtonWrapper>
          </Container>
        </Wrapper>
      </div>
    );
  }

  if (props.type == "large") {
    return (
      <div>
        <Wrapper
          type={props.type}
          first={props.first}
          second={props.second}
          third={props.third}
          title={props.title}
          direction="column"
          align="center"
          justify="center"
        >
          <Container direction="column" align="center" justify="space-between">
            <Bar />
            <Typography bold20>{props.title}</Typography>
            <ButtonWrapper direction="column" justify="space-between">
              <Button whiteGray>{props.first}</Button>
              <Button whiteGray>{props.second}</Button>
              {props.red ? (
                <Button whiteGray redTypo>
                  {props.third}
                </Button>
              ) : (
                <Button whiteGray>{props.third}</Button>
              )}
            </ButtonWrapper>
          </Container>
        </Wrapper>
      </div>
    );
  }
  if (props.type == "extraLarge") {
    return (
      <div>
        <Wrapper
          type={props.type}
          first={props.first}
          second={props.second}
          third={props.third}
          title={props.title}
          direction="column"
          align="center"
          justify="center"
        >
          <Container direction="column" align="center" justify="space-between">
            <Bar />
            <Typography bold20>{props.title}</Typography>
            <ButtonWrapper direction="column" justify="space-between">
              <Button whiteGray>{props.first}</Button>
              <Button whiteGray>{props.second}</Button>
              {props.red ? (
                <Button whiteGray redTypo>
                  {props.third}
                </Button>
              ) : (
                <Button whiteGray>{props.third}</Button>
              )}
            </ButtonWrapper>
          </Container>
        </Wrapper>
      </div>
    );
  }
};

export default SelectPopUp;
