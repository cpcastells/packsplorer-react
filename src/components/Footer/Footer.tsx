import React from "react";
import FooterStyled from "./FooterStyled";
import { item } from "../../types";

interface FooterProps {
  items: item[];
}

const Footer = ({ items }: FooterProps): React.ReactElement => {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <FooterStyled className="stats">
      {!totalItems ? (
        <em>Start adding some items to your list 🚀</em>
      ) : percentage === 100 ? (
        <em>You got everything! Ready to go 🚅</em>
      ) : (
        <em>
          👓 You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} ({percentage} %)
        </em>
      )}
    </FooterStyled>
  );
};

export default Footer;
