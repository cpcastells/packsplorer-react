import React from "react";
import PackingListStyled from "./PackingListStyled";
import Item from "../Item/Item";
import { itemMock } from "../../mocks/mocks";

const PackingList = (): React.ReactElement => {
  return (
    <PackingListStyled>
      <h3>What's in your bag?</h3>
      <ul className="items-list">
        <Item item={itemMock} />
      </ul>
    </PackingListStyled>
  );
};

export default PackingList;
