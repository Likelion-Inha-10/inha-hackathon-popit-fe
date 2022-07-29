import styled from "styled-components";
import Flex from "../Flex";
import Typography from "../Typography";
import Margin from "../Margin";
import { Alert } from "../Alert";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

const PopChestWrapper = styled.div`
  width: 140px;
  height: 130px;
  border-radius: 20px;
  background-image: url(${(props) => props.backImage});

  background-size: 100% 100%;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  margin: 10px 10px 10px 10px;
`;

const Dimmer = styled(Flex)`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ButtonWrapper = styled(Flex)`
  margin-top: 5px;
  width: 100%;
  height: 30px;
`;

const TypoWrapper = styled.div`
  margin-left: 2px;
  width: 100%;
  height: 100%-30px;
`;

const PopChest = (props) => {
  const navigate = useNavigate();

  const onPopClick = () => {
    navigate(`/pop-list/${props.title}`);
  };

  const onButtonClick = () => {
    Alert("삭제되었습니다");
    navigate(-1);
  };

  const createPopChest = (type) => {
    if (type === "list") {
      return (
        <TypoWrapper onClick={onPopClick}>
          <Margin height="55px" width="100%" />
          <Typography color="white" bold16>
            {props.title}
          </Typography>
        </TypoWrapper>
      );
    }
    if (type === "edit") {
      return (
        <>
          <ButtonWrapper
            onClick={onButtonClick}
            direction="row"
            justify="space-around"
          >
            <Margin width="80px" height="100%" />

            <IoIosClose color="white" size="30" />
          </ButtonWrapper>
          <TypoWrapper>
            <Margin height="20px" width="100%" />
            <Typography color="white" bold16>
              {props.title}
            </Typography>
          </TypoWrapper>
        </>
      );
    }
  };
  return (
    <PopChestWrapper backImage={props.backImage}>
      <Dimmer direction="column">
        {createPopChest(props.type)}
        {/* <Typography color="white" bold16>
          {props.title}
        </Typography>
        <ButtonWrapper direction="row" justify="space-around">
          <Margin width="80px" height="100%" />

          <IoIosClose color="white" size="30" />
        </ButtonWrapper>
        <TypoWrapper onClick={onPopClick}>
          <Margin height="20px" width="100%" />
          <Typography color="white" bold16>
            {props.title}
          </Typography>
        </TypoWrapper> */}
      </Dimmer>
    </PopChestWrapper>
  );
};

export default PopChest;

/* PopChest 컴포넌트 사용법
  <PopChest title="카테고리명" backImage="사용할이미지링크" onClick={onClick} />
    => onClick은 보관함 클릭 했을 때 실행되는 함수
*/
