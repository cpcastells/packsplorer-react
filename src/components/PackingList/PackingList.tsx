import React from "react";
import PackingListStyled from "./PackingListStyled";
import Item from "../Item/Item";
import { item } from "../../types";

interface PackingListProps {
  items: item[];
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
  sortBy: string;
}

const PackingList = ({
  items,
  onToggleItem,
  onDeleteItem,
  sortBy,
}: PackingListProps): React.ReactElement => {
  let sortedItems: item[] = items;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <PackingListStyled className="packing-list">
      <h3>What's in your bag?</h3>
      <ul className="packing-list__items">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </PackingListStyled>
  );
};

export default PackingList;
