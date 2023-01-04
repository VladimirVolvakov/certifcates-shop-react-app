import styled from "styled-components";

export const CatalogueContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 0;
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 50px;
  weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 60px;
`;

export const Catalogue = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;