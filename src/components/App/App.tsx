import { useState } from "react";
import { item } from "../../types";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import PackingList from "../PackingList/PackingList";
import AppStyled from "./AppStyled";

function App() {
  const [items, setItems] = useState<item[]>([]);

  const handleAddItem = (item: item): void => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id: string): void => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleOnToggle = (id: string): void => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };

  return (
    <AppStyled>
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onToggleItem={handleOnToggle}
        onDeleteItem={handleDeleteItem}
      />
      <Footer items={items} />
    </AppStyled>
  );
}

export default App;
