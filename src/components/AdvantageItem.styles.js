import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 221px;
  max-width: 300px;

  @media (max-width: 375px) {
    min-width: 211px;
    max-width: 291px;
  }
`;

export const Image = styled.img`
  margin-right: 12px;

  @media (max-width: 375px) {
    height: 70px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
`;