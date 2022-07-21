import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height || "500px"};

  ${(props) =>
    props.white &&
    `
    background-color: white;
    `}

  ${(props) =>
    props.gradation &&
    `
      background: linear-gradient(270deg, #ff7c69 -30%, #ffc84b 100%);
    `}
  
    ${(props) =>
    props.up &&
    `
      border-radius: 0 0 64px 64px;
      box-shadow: 0px -4px 20px 4px rgb(0, 0, 0, 0.15);


      `}
    
      ${(props) =>
    props.down &&
    `
      border-radius: 64px 64px 0 0;
      box-shadow: 0px 4px 20px 4px rgb(0, 0, 0, 0.15);
    `}
`;

const RoundBox = (props) => {
  return (
    <Wrapper
      white={props.white}
      gradation={props.gradation}
      height={props.height}
      up={props.up}
      down={props.down}
    >
      {props.children}
    </Wrapper>
  );
};
export default RoundBox;
