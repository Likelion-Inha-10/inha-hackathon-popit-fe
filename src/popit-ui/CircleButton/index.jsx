import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import Flex from "../Flex";
import { AiOutlinePlus } from "react-icons/ai";

const Circle = styled(Flex)`
  position: fixed;
  margin-left: 270px;
  margin-top: 530px;
  height: 64px;
  width: 64px;
  background-color: ${(props) => props.color || props.theme.colors.main};
  border-radius: 50%;
  box-shadow: 0px 4px 10px 2px rgb(0, 0, 0, 0.15);

  &:hover {
    background-color: ${(props) => props.theme.colors.orange};
  }
`;

const CircleButton = (props) => {
  return (
    <Circle
      onClick={props.onClick}
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
1. plus 잔딜시 plus모양으로 바뀜. 
2. 아무것도 입력하지 않으면 -> (화살표) 모양임.
3. color=""로 색을 지정해줄 수 있음
*/
