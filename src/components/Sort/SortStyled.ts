import { styled } from "styled-components";

const SortStyled = styled.div`
  display: flex;
  background-color: #5a3e2b;
  padding: 4rem 0;
  justify-content: center;

  .packing-list__sort {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    select,
    button {
      text-transform: uppercase;
      padding: 0.8rem 2.4rem;
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 0.8rem;
      background-color: #ffebb3;
      color: #5a3e2b;
      border-radius: 10rem;
    }
  }
`;

export default SortStyled;
