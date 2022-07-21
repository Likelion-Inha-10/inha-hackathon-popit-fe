import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import Flex from "../Flex";
import { AiOutlinePlus } from "react-icons/ai";

const Circle = styled(Flex)`
  height: 64px;
  width: 64px;
  background-color: ${(props) => props.color || props.theme.colors.main};
  border-radius: 50%;
  box-shadow: 0px 4px 10px 2px rgb(0, 0, 0, 0.15);
`;

const CircleButton = (props) => {
  return (
    <Circle
      color={props.color}
      plus={props.plus}
      justify="center"
      align="center"
    >
      {props.plus ? (
        <AiOutlinePlus size="32" color="#ffffff" />
      ) : (
        <BsArrowRightShort size="40" color="#ffffff" />
      )}
    </Circle>
  );
};
export default CircleButton;

/*사용법
plus 추가시 plus모양으로 바뀜. 
아무것도 입력하지 않으면 -> (화살표) 모양임.
color=""로 색을 지정해줄 수 있음
*/
