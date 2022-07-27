import styled from "styled-components";
import Flex from "../Flex";
import { IoChevronBackSharp } from "react-icons/io5";
import Margin from "../Margin";
import Typography from "../Typography";
import theme from "../../assets/theme";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 68px;
`;

const Title = styled.div`
  color: white;
  font-size: 24px;
  visibility: hidden;

  ${(props) =>
    props.popit &&
    `
  visibility: visible;
`}
`;

const Back = styled.div`
  padding-left: 6px;
  visibility: hidden;

  ${(props) =>
    props.back &&
    `
  visibility: visible;
`}
`;

const FirstHeader = (props) => {
  const navigate = useNavigate();

  const moveToBack = () => {
    navigate("/login");
  };
  return (
    <Wrapper align="center" justify="space-between">
      <Back onClick={moveToBack} back={props.back}>
        <IoChevronBackSharp size="30" color="#ffffff" />
      </Back>
      <Title popit={props.popit}>
        <Typography size="24px" color={theme.colors.white}>
          POP IT
        </Typography>
      </Title>
      <Margin width="30px" height="100%" />
    </Wrapper>
  );
};

export default FirstHeader;

/* 사용법
1. back 전달시 뒤로가기 버튼 활성화
2. popit 전달시 popit이라는 중앙 로고 활성화
*/
