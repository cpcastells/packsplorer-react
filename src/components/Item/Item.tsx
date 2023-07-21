import React from "react";
import ItemStyled from "./ItemStyled";
import { item } from "../../types";

interface ItemProps {
  item: item;
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

const Item = ({
  item,
  onToggleItem,
  onDeleteItem,
}: ItemProps): React.ReactElement => {
  return (
    <ItemStyled>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </ItemStyled>
  );
};

export default Item;
