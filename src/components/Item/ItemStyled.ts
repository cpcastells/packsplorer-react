import styled from "styled-components";

const ItemStyled = styled.li`
  display: flex;
  gap: 1.2rem;

  & button {
    font-size: 1.8rem;
  }

  .packed {
    text-decoration: line-through;
  }
`;

export default ItemStyled;
