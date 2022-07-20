import GlobalStyle from "./GlobalStyle";
import Button from "./popit-ui/Button";
import Intro from "./pages/Intro";
import Layout from "./popit-ui/Layout";

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
