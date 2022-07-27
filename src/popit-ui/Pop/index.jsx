import { getWidth } from "react-slick/lib/utils/innerSliderUtils";
import styled from "styled-components";
import { FiMoreHorizontal, FiMessageSquare } from "react-icons/fi";
import theme from "../../assets/theme";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Typography from "../Typography";
import Flex from "../Flex";
import Margin from "../Margin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleButton from "../CircleButton";
import Alert from "../Alert";

const Wrapper = styled(Flex)`
  height: 319px;
  width: 304px;
  border-radius: 24px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;

  ${(props) =>
    props.small &&
    `
  height: 127px;
  width: 338px; 
  
  ${Container} {
    height: 100px;
    width: 300px;
  }
  `}
`;

const Dimmer = styled(Flex)`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

const Container = styled(Flex)`
  height: 90%;
  width: 88%;
`;

const MoreContainer = styled(Flex)`
  width: 100%;
`;

const TypoContainer = styled(Flex)`
  height: 80%;
  width: 100%;
`;
const ReplHeartContainer = styled(Flex)`
  width: 100%;
`;

const Pop = (props) => {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const onClickLick = () => {
    setIsClick(!isClick);
  };

  const onClickRepl = () => {
    navigate();
  };

  const onClickMore = () => {
    //모달로 경고 창을 띄워야함
    Alert("팝저장, 팔로우 취소 같은 창을 아래에");
  };

  return (
    <Wrapper
      onClick={props.onClick}
      likes={props.likes}
      repls={props.repls}
      small={props.small}
      justify="center"
      align="center"
      color={props.color}
      src={props.src}
    >
      <Dimmer justify="center" align="center">
        <Container direction="column" justify="space-between" align="center">
          <MoreContainer justify="flex-end">
            <FiMoreHorizontal
              onClick={onClickMore}
              color={theme.colors.white}
              size={18}
            />
          </MoreContainer>
          <TypoContainer
            onClick={() => props.setPopModal(!props.popModal)}
            align="center"
            justify="center"
          >
            <Typography regular16 color="white">
              {props.children}
            </Typography>
          </TypoContainer>
          <ReplHeartContainer align="center" justify="flex-end">
            <FiMessageSquare
              onClick={onClickRepl}
              color={theme.colors.white}
              size={18}
            />
            <Margin width="5px" />
            <Typography regular12 inline color="white">
              {props.repls}
            </Typography>
            <Margin width="10px" />
            {isClick ? (
              <>
                <FaHeart
                  onClick={onClickLick}
                  color={theme.colors.white}
                  size={18}
                />
                <Margin width="5px" />
                <Typography regular12 inline color="white">
                  {props.likes}
                </Typography>
              </>
            ) : (
              <>
                <FaRegHeart
                  onClick={onClickLick}
                  color={theme.colors.white}
                  size={18}
                />
                <Margin width="5px" />
                <Typography regular12 inline color="white">
                  {props.likes}
                </Typography>
              </>
            )}
          </ReplHeartContainer>
        </Container>
      </Dimmer>
    </Wrapper>
  );
};

export default Pop;
