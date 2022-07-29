import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Button from "../Button";
import Margin from "../Margin/index";
import Typography from "../Typography/index";
import Alert from "../Alert";

const Wrapper = styled(Flex)`
  width: 375px;
  height: 232px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0 rgb(0, 0, 0, 0.1);

  ${(props) =>
    props.size == "small" &&
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
    props.size == "large" &&
    `
    height: 273px;
  
  ${Container} {
    height: 223px;
  }
  `};

  ${(props) =>
    props.size == "extraLarge" &&
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
  const time = () => {
    props.setClassify(!props.classify);
    Alert("시간 순으로 정렬되었습니다.");
  };
  const like = () => {
    props.setClassify(!props.classify);
    Alert("좋아요 순으로 정렬되었습니다.");
  };
  const repl = () => {
    props.setClassify(!props.classify);
    Alert("댓글 순으로 정렬되었습니다.");
  };

  if (props.size == "medium") {
    return (
      <div>
        <Wrapper
          popSave={props.popSave}
          setPopSave={props.setPopSave}
          clickMore={props.clickMore}
          setClickMore={props.setClickMore}
          onClick={(e) => e.stopPropagation()}
          size={props.size}
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
              <Button
                onClick={() => {
                  props.setClickMore(!props.clickMore);
                  props.setPopSave(!props.popSave);
                }}
                whiteGray
              >
                {props.first}
              </Button>
              <Button
                onClick={() => {
                  props.setClickMore(!props.clickMore);
                }}
                whiteGray
              >
                {props.second}
              </Button>
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
  const firstButton = () => {
    props.setClickMore(!props.clickMore);
    Alert("언팔로우 되었습니당 쩔수.");
  };
  const secondButton = () => {
    props.setClickMore(!props.clickMore);
    Alert("보관함에서 삭제하였습니당 저런 so sad.");
  };
  if (props.size == "small") {
    return (
      <div>
        <Wrapper
          clickMore={props.clickMore}
          setClickMore={props.setClickMore}
          size={props.size}
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
              <Button onClick={firstButton} whiteGray>
                {props.first}
              </Button>
              {props.red ? (
                <Button onClick={secondButton} whiteGray redTypo>
                  {props.second}
                </Button>
              ) : (
                <Button onClick={secondButton} whiteGray>
                  {props.second}
                </Button>
              )}
            </ButtonWrapper>
          </Container>
        </Wrapper>
      </div>
    );
  }

  if (props.size == "large") {
    return (
      <div>
        <Wrapper
          size={props.size}
          classify={props.classify}
          setClassify={props.setClassify}
          type={props.type}
          first={props.first}
          second={props.second}
          third={props.third}
          title={props.title}
          direction="column"
          align="center"
          justify="center"
          onClick={(e) => e.stopPropagation()}
        >
          <Container direction="column" align="center" justify="space-between">
            <Bar />
            <Typography bold20>{props.title}</Typography>
            <ButtonWrapper direction="column" justify="space-between">
              <Button whiteGray onClick={time}>
                {props.first}
              </Button>
              <Button whiteGray onClick={like}>
                {props.second}
              </Button>
              {props.red ? (
                <Button onClick={repl} whiteGray redTypo>
                  {props.third}
                </Button>
              ) : (
                <Button onClick={repl} whiteGray>
                  {props.third}
                </Button>
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
          size={props.size}
          onClick={(e) => e.stopPropagation()}
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
