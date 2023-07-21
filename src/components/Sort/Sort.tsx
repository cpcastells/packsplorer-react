import React from "react";
import SortStyled from "./SortStyled";
import { item } from "../../types";

interface SortProps {
  onSort: (type: string) => void;
  onClear: () => void;
  sortBy: string;
  items: item[];
}

const Sort = ({
  onSort,
  onClear,
  sortBy,
  items,
}: SortProps): React.ReactElement => {
  return (
    <SortStyled>
      <div className="packing-list__sort">
        <select value={sortBy} onChange={(event) => onSort(event.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {items.length ? (
          <button onClick={() => onClear()}>clear list</button>
        ) : (
          ""
        )}
      </div>
    </SortStyled>
  );
};

export default Sort;
