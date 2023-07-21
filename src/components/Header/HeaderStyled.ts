import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #f4a226;

  .main-title {
    text-align: center;
    font-family: "Lobster";
    font-size: 7rem;
    letter-spacing: -5px;
    padding: 2.4rem 2rem;

    @media (max-width: 505px) {
      font-size: 5.8rem;
    }

    @media (max-width: 410px) {
      font-size: 5.3rem;
    }
  }
`;

export default HeaderStyled;
