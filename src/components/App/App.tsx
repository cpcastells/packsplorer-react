import { useState } from "react";
import { item } from "../../types";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import PackingList from "../PackingList/PackingList";
import AppStyled from "./AppStyled";

function App() {
  const [items, setItems] = useState<item[]>([]);

  const handleAddItem = (item: item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <AppStyled>
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Footer items={items} />
    </AppStyled>
  );
}

export default App;
