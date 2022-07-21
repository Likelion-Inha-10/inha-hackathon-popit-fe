import Button from "./popit-ui/Button";
import Layout from "./popit-ui/Layout";
import Typography from "./popit-ui/Typography";
import Margin from "./popit-ui/Margin";
import RoundBox from "./popit-ui/RoundBox";
import FirstHeader from "./popit-ui/FirstHeader";
import { IoChevronBackSharp } from "react-icons/io5";

function App() {
  return (
    <>
      <Layout gradation down>
        <FirstHeader back popit></FirstHeader>

        <RoundBox white down height="785px">
          <Button small>완료</Button>
        </RoundBox>
      </Layout>
    </>
  );
}

export default App;
