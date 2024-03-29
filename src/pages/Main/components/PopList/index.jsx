import styled from "styled-components";
import Flex from "../../../../popit-ui/Flex";
import Typography from "../../../../popit-ui/Typography";
import { IoChevronForwardSharp } from "react-icons/io5";
import theme from "../../../../assets/theme";
import Margin from "../../../../popit-ui/Margin";
import Pop from "../../../../popit-ui/Pop";
import cat from "../../../../assets/image/babo-cat.png";
import Carousel from "../Carousel";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled(Flex)`
  height: ${(props) => props.height};
  width: 100%;
`;

const TypoContainer = styled(Flex)`
  align-items: baseline;
  height: 30px;
  width: 80%;
`;

const PopContainer = styled(Flex)``;
const MoreContainer = styled(Flex)`
  cursor: pointer;
`;
const MainPopContainer = (props) => {
  const Navigate = useNavigate();

  const moveToMorePop = () => {
    Navigate("/more-pop");
    //나중에 id로 연결
  };

  return (
    <>
      <Margin height="20px" />
      <Container height="430px" direction="column" align="center">
        <TypoContainer align="center" justify="space-between">
          <Typography bold20>오늘의 팝</Typography>
          <MoreContainer onClick={moveToMorePop}>
            <Typography regular12 color="middlegray">
              더보기
            </Typography>
            <Margin width="3px" />
            <IoChevronForwardSharp size={12} color={theme.colors.middlegray} />
          </MoreContainer>
        </TypoContainer>
        <Margin height="10px" />
        <Carousel
          popSave={props.popSave}
          setPopSave={props.setPopSave}
          clickMore={props.clickMore}
          setClickMore={props.setClickMore}
        />
      </Container>
      <Container height="400px" direction="column" align="center">
        <TypoContainer align="center" justify="space-between">
          <Typography bold20>지금 뜨는 팝 ✨</Typography>
          <MoreContainer>
            <Typography regular12 color="middlegray">
              더보기
            </Typography>
            <Margin width="3px" />
            <IoChevronForwardSharp size={12} color={theme.colors.middlegray} />
          </MoreContainer>
        </TypoContainer>
        <Margin height="10px" />
        <Pop
          popSave={props.popSave}
          setPopSave={props.setPopSave}
          clickMore={props.clickMore}
          setClickMore={props.setClickMore}
          small
          src={cat}
          likes="324"
          repls="1"
        >
          개발이 하고싶니?
        </Pop>
        <Margin height="20px" />
        <Pop
          popSave={props.popSave}
          setPopSave={props.setPopSave}
          clickMore={props.clickMore}
          setClickMore={props.setClickMore}
          small
          src={cat}
          likes="324"
          repls="1"
        >
          개발이 하고싶니?
        </Pop>
      </Container>
      <Container height="400px" direction="column" align="center">
        <TypoContainer align="center" justify="space-between">
          <Typography bold20>나에게 맞는 팝 ✨</Typography>
          <MoreContainer>
            <Typography regular12 color="middlegray">
              더보기
            </Typography>
            <Margin width="3px" />
            <IoChevronForwardSharp size={12} color={theme.colors.middlegray} />
          </MoreContainer>
        </TypoContainer>
        <Margin height="10px" />
        <Pop
          popSave={props.popSave}
          setPopSave={props.setPopSave}
          clickMore={props.clickMore}
          setClickMore={props.setClickMore}
          small
          src={cat}
          likes="324"
          repls="1"
        >
          개발이 하고싶니?
        </Pop>
        <Margin height="20px" />
        <Pop
          popSave={props.popSave}
          setPopSave={props.setPopSave}
          clickMore={props.clickMore}
          setClickMore={props.setClickMore}
          small
          src={cat}
          likes="324"
          repls="1"
        >
          개발이 하고싶니?
        </Pop>
      </Container>
    </>
  );
};
export default MainPopContainer;
