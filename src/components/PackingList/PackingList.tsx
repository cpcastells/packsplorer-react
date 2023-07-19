import React from "react";
import PackingListStyled from "./PackingListStyled";

const PackingList = (): React.ReactElement => {
  return (
    <PackingListStyled>
      <h2>What's in your bag?</h2>
      <ul className="items-list">
        <li>
          <span>1 pullover </span>
          <button>❌</button>
        </li>
      </ul>
    </PackingListStyled>
  );
};

export default PackingList;
