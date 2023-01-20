import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 100px auto 95px;

  @media (max-width: 375px) {
    max-width: 335px;
    margin: 60px auto;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 375px) {
    font-size: 21px;
    line-height: 25px;
    margin-bottom: 30px;
  }
`;

export const Accordion = styled.div``;