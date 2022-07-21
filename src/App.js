import Button from "./popit-ui/Button";
import Layout from "./popit-ui/Layout";
import Typography from "./popit-ui/Typography";
import Margin from "./popit-ui/Margin";
import RoundBox from "./popit-ui/RoundBox";
import Header from "./popit-ui/Header";
import { IoChevronBackSharp } from "react-icons/io5";

function App() {
  return (
    <>
      <Layout gradation down>
        <Header
          firstComponent={<IoChevronBackSharp />}
          secondComponent={<h1>POPIT</h1>}
          thirdComponent={<h1>3</h1>}
        ></Header>
        <h1>나는 천재</h1>

        <RoundBox white down height="785px"></RoundBox>
      </Layout>
    </>
  );
}

export default App;
