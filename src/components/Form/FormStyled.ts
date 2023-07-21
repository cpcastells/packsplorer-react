import styled from "styled-components";

const FormStyled = styled.form`
  background-color: #e5771f;
  padding: 1.9rem 2rem;
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

  .form-add {
    text-transform: uppercase;
    background-color: #76c7ad;
    transition: 400ms ease;

    &:hover {
      background-color: #2edba1;
    }
  }

  .form-data {
    display: flex;
    gap: 0.8rem;
  }

  @media (max-width: 930px) {
    flex-direction: column;
    gap: 1.2rem;

    .form-title {
      padding-bottom: 10px;
    }
  }

  @media (max-width: 505px) {
    .form-data {
      flex-direction: column;
    }
  }
`;

export default FormStyled;
