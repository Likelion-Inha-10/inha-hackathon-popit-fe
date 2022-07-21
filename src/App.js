import GlobalStyle from "./GlobalStyle";
import Button from "./popit-ui/Button";
import Intro from "./pages/Intro";
import Layout from "./popit-ui/Layout";
import Typography from "./popit-ui/Typography";
import Margin from "./popit-ui/Margin";
import RoundBox from "./popit-ui/RoundBox";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Intro />
      </Layout>
    </>
  );
}

export default App;
