import styled from "styled-components";

const ItemStyled = styled.li`
  display: flex;
  font-size: 1.4rem;
  gap: 1.2rem;

  & button {
    font-size: 1.1rem;
  }

  .packed {
    text-decoration: line-through;
  }
`;

export default ItemStyled;
