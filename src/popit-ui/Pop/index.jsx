import { getWidth } from "react-slick/lib/utils/innerSliderUtils";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 319px;
  width: 304px;
  background-color: ${(props) => props.theme.colors.gray};
`;

const Pop = (props) => (
  <div>
    <Wrapper color={props.color}></Wrapper>
  </div>
);

export default Pop;
