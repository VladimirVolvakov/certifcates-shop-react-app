import styled from "styled-components";

export const CatalogueContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 100px auto;

  @media (max-width: 375px) {
    max-width: 335px;
    margin: 60px auto;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 50px;
  weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 375px) {
    font-size: 21px;
    line-height: 25px;
    margin-bottom: 30px;
  }
`;

export const Catalogue = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 375px) {
    grid-template-columns: 1fr 1fr;
    gap: 19px;
  }
`;