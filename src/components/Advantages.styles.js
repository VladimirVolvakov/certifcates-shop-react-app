import styled from "styled-components";

export const AdvantagesContainer = styled.div`
  height: 80px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;

  @media (max-width: 375px) {
    height: auto;
    max-width: 335px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }
`;