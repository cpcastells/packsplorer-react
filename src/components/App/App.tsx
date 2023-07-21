import { useState } from "react";
import { item } from "../../types";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import PackingList from "../PackingList/PackingList";
import AppStyled from "./AppStyled";
import Sort from "../Sort/Sort";

function App() {
  const [items, setItems] = useState<item[]>([]);
  const [sortBy, setSortBy] = useState<string>("input");

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

  const handleOnSort = (sortBy: string) => {
    setSortBy(sortBy);
  };

  return (
    <AppStyled>
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onToggleItem={handleOnToggle}
        onDeleteItem={handleDeleteItem}
        sortBy={sortBy}
      />
      <Sort onSort={handleOnSort} sortBy={sortBy} />
      <Footer items={items} />
    </AppStyled>
  );
}

export default App;
