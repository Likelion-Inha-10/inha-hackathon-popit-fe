import styled from "styled-components";

const Text = styled.div`
  color: ${(props) => props.theme.colors.black};
  text-align: ${(props) => (props.textalign ? props.textalign : "center")};
  font-size: 24px;
  font-family: "GmarketSans";
  font-weight: 700;
  font-style: normal;
  src: url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFBold.woff2)
      format("woff2"),
    url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFBold.woff)
      format("woff");
`;

const Header = (props) => {
  return <Text color={props.color}></Text>;
};
export default Header;
