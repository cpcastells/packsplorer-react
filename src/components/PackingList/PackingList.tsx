import React from "react";
import PackingListStyled from "./PackingListStyled";
import Item from "../Item/Item";
import { item } from "../../types";

interface PackingListProps {
  items: item[];
}

const PackingList = ({ items }: PackingListProps): React.ReactElement => {
  return (
    <PackingListStyled>
      <h3>What's in your bag?</h3>
      <ul className="items-list">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </PackingListStyled>
  );
};

export default PackingList;
