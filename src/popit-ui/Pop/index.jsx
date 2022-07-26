import { getWidth } from "react-slick/lib/utils/innerSliderUtils";
import styled from "styled-components";
import { FiMoreHorizontal, FiMessageSquare } from "react-icons/fi";
import theme from "../../assets/theme";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Typography from "../Typography";
import Flex from "../Flex";
import Margin from "../Margin";
import { useState } from "react";

const Wrapper = styled(Flex)`
  height: 319px;
  width: 304px;
  border-radius: 24px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
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

const TypoContainer = styled(Flex)``;
const ReplHeartContainer = styled(Flex)`
  width: 100%;
`;

const Pop = (props, { onClick }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <Wrapper
      hearts={props.hearts}
      repls={props.repls}
      small={props.small}
      justify="center"
      align="center"
      color={props.color}
      onClick={props.onClick}
      src={props.src}
    >
      <Dimmer justify="center" align="center">
        <Container direction="column" justify="space-between" align="center">
          <MoreContainer justify="flex-end">
            <FiMoreHorizontal color={theme.colors.white} size={18} />
          </MoreContainer>
          <TypoContainer>
            <Typography regular16 color="white">
              {props.children}
            </Typography>
          </TypoContainer>
          <ReplHeartContainer align="center" justify="flex-end">
            <FiMessageSquare color={theme.colors.white} size={18} />
            <Margin width="5px" />
            <Typography regular12 inline color="white">
              {props.repls}
            </Typography>
            <Margin width="10px" />
            {isClick ? (
              <>
                <FaHeart
                  onClick={() => setIsClick(!isClick)}
                  color={theme.colors.white}
                  size={18}
                />
                <Margin width="5px" />
                <Typography regular12 inline color="white">
                  {props.hearts}
                </Typography>
              </>
            ) : (
              <>
                <FaRegHeart
                  onClick={() => setIsClick(!isClick)}
                  color={theme.colors.white}
                  size={18}
                />
                <Margin width="5px" />
                <Typography regular12 inline color="white">
                  {props.hearts}
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
