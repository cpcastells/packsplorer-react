import React from "react";
import SortStyled from "./SortStyled";

interface SortProps {
  onSort: (type: string) => void;
  sortBy: string;
}

const Sort = ({ onSort, sortBy }: SortProps): React.ReactElement => {
  return (
    <SortStyled>
      <div className="packing-list__sort">
        <select value={sortBy} onChange={(event) => onSort(event.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </SortStyled>
  );
};

export default Sort;
