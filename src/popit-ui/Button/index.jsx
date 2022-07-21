import styled from "styled-components";
//노란색버튼 (칠해져 있는 것)& 겉만 노랑(아이디 ,비번 적는 곳)
const Button = styled.button`
  position: relative;
  background-color: ${(props) => props.color || props.theme.colors.main};
  border-radius: 52px;
  height: 48px;
  width: 324px;
  border: ${(props) => props.border || "none"};
  color: white;
  font-size: 16px;
  text-align: center;

  :hover {
    background-color: ${(props) =>
      props.hoverColor || props.theme.colors.orange};
  }

  ${(props) =>
    props.medium &&
    `
      width: 160px;
    `}

  ${(props) =>
    props.small &&
    `
      font-size: 12px;
      width: 70px;
      height: 30px;
    `}
`;

export default Button;
/* 사용법
1. color="" 를 통해 버튼의 배경색을 바꿀 수 있음
2. border="" 를 통해 버튼의 테두리 색을 바꿀 수 있음
3. medium 전달시 중간 크기의 버튼 생성(기본은 대형)
4. small 전달시 소형 크기의 버튼 생성 */
