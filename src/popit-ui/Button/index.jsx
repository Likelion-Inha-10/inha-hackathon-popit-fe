import styled, { css } from "styled-components";
//노란색버튼 (칠해져 있는 것)& 겉만 노랑(아이디 ,비번 적는 곳)
const Button = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 52px;
  height: 48px;
  width: 324px;
  border: ${(props) => (props.border ? props.border : "none")};
  color: white;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: gray;
  }

  ${(props) =>
    props.medium &&
    css`
      width: 160px;
    `}

  ${(props) =>
    props.small &&
    css`
      width: 70px;
      height: 30px;
    `}
`;
export default Button;
//props.medium은 로그인 버튼, props.small은 main에서 완료버튼입니다
//figma 형식 그대로 만들긴 했는데 height부분은 수정해야 할 것 같습니다.
//hover  background color 일단 gray로 해놨어요
//수정사항 있으면 고쳐주세요 !
