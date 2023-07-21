import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import FormStyled from "./FormStyled";
import { item } from "../../types";

interface FormProps {
  onAddItem: (item: item) => void;
}

const Form = ({ onAddItem }: FormProps): React.ReactElement => {
  const initialState: item = {
    description: "",
    quantity: 1,
    packed: false,
    id: "",
  };

  const [item, setItem] = useState(initialState);

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!item.description) return;

    onAddItem({ ...item, id: uuid() });
    setItem(initialState);
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <h2 className="form-title">What do you need for your 🤩 trip?</h2>
      <div className="form-data">
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
      </div>
      <button className="form-add">add</button>
    </FormStyled>
  );
};

export default Form;
