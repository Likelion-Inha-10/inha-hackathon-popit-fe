import styled from "styled-components";

const Margin = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

/*사용법: 
<Margin height="50px" width="100px" />
*/

export default Margin;
