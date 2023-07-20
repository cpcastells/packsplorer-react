import React from "react";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  return (
    <FormStyled>
      <h2>What do you need for your 🤩 trip?</h2>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..."></input>
      <button className="add-item">add</button>
    </FormStyled>
  );
};

export default Form;
