import styled from "styled-components";
import Flex from "../Flex";
import Typography from "../Typography";

const PopChestWrapper = styled.div`
  width: 140px;
  height: 130px;
  border-radius: 20px;
  background-image: url(${(props) =>
    props.backImage
      ? props.backImage
      : " https://i.pinimg.com/564x/cd/95/26/cd952679dcf7915ba1d285b55e970dac.jpg"});

  background-size: 100% 100%;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
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

const PopChest = (props) => {
  return (
    <PopChestWrapper onClick={props.onClick} backImage={props.backImage}>
      <Dimmer justify="center" align="center">
        <Typography color="white" bold16>
          {props.title}
        </Typography>
      </Dimmer>
    </PopChestWrapper>
  );
};

export default PopChest;

/* PopChest 컴포넌트 사용법
  <PopChest title="카테고리명" backImage="사용할이미지링크" onClick={onClick} />
    => onClick은 보관함 클릭 했을 때 실행되는 함수
*/
