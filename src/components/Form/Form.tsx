import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import FormStyled from "./FormStyled";
import { item } from "../../types";

interface FormProps {
  onAddItem: (item: item) => void;
}

const Form = ({ onAddItem }: FormProps): React.ReactElement => {
  const [item, setItem] = useState({
    description: "",
    quantity: 1,
    packed: false,
    id: "",
  });

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddItem({ ...item, id: uuid() });
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <h2>What do you need for your 🤩 trip?</h2>
      <select id="quantity" value={item.quantity} onChange={handleOnChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        id="description"
        value={item.description}
        placeholder="item..."
        onChange={handleOnChange}
      />
      <button className="add-item">add</button>
    </FormStyled>
  );
};

export default Form;
