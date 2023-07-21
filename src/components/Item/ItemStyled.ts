import styled from "styled-components";

const ItemStyled = styled.li`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  width: 100%;
  background-color: rgba(147, 76, 29, 0.6);
  border: 2px solid #5a3e2b;
  padding: 8px 10px;
  border-radius: 10px;

  input {
    height: 2rem;
    width: 2rem;
    accent-color: #e5771f;
  }

  & button {
    font-size: 1.8rem;
  }

  .packed {
    text-decoration: line-through;
  }
`;

export default ItemStyled;
