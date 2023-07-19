import React from "react";
import ItemStyled from "./ItemStyled";
import { item } from "../../types";

interface ItemProps {
  item: item;
}

const Item = ({ item }: ItemProps): React.ReactElement => {
  return (
    <ItemStyled>
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </ItemStyled>
  );
};

export default Item;
