import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import PackingList from "../PackingList/PackingList";
import AppStyled from "./AppStyled";

function App() {
  return (
    <AppStyled>
      <Header />
      <Form />
      <PackingList />
      <Footer />
    </AppStyled>
  );
}

export default App;
