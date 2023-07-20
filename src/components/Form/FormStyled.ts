import styled from "styled-components";

const FormStyled = styled.form`
  background-color: #e5771f;
  padding: 1.9rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 2.4rem;
  font-weight: bold;

  & button,
  input,
  select {
    background-color: #ffebb3;
    color: #5a3e2b;
    border-radius: 10rem;
    padding: 1.2rem 3.2rem;
    font-weight: 700;
    font-size: 1.8rem;
  }

  .add-item {
    text-transform: uppercase;
    background-color: #76c7ad;
    transition: 400ms ease;

    &:hover {
      background-color: #2edba1;
    }
  }
`;

export default FormStyled;
