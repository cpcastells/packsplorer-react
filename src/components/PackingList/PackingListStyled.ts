import styled from "styled-components";

const PackingListStyled = styled.div`
  background-color: #5a3e2b;
  color: #ffebb3;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;

  .packing-list {
    &__items {
      list-style: none;
      width: 80%;
      font-size: 2.4rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.2rem;
      justify-content: center;
      align-content: start;
      justify-items: start;
    }
  }
`;

export default PackingListStyled;
