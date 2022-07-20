import GlobalStyle from "./GlobalStyle";
import Button from "./popit-ui/Button";
import Layout from "./popit-ui/Layout";
import Typography from "./popit-ui/Typography";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Typography center>안녕</Typography>
        <Typography underline>안녕</Typography>
        <Typography title>안녕</Typography>
        <Typography headline>안녕</Typography>
        <Typography subhead>안녕</Typography>
        <Typography body>안녕</Typography>
        <Typography bold300>안녕</Typography>
        <Typography bold400>안녕</Typography>
        <Typography bold700>안녕</Typography>
        <Typography inline>안녕</Typography>
      </Layout>
    </>
  );
}

export default App;
