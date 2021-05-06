import { GlobalStyle } from "../assets/styles/GlobalStyle";
import Form from "../components/organisms/Form/Form";
import MainTemplate from "../components/templates/MainTemplate";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainTemplate>
        <Form />
      </MainTemplate>
    </>
  );
}

export default App;
