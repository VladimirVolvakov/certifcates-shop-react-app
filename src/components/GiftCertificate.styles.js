import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 375px) {
    max-width: 335px;
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

export const Image = styled.img`
  margin-right: 60px;

  @media (max-width: 375px) {
    width: 335px;
    margin: 0;
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
  color: #404936;
  margin-bottom: 30px;

  @media (max-width: 375px) {
    font-size: 21px;
    line-height: 25px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-left: 20px;

  @media (max-width: 375px) {
    width: 325px;
    margin-bottom: 30px;
  }
`;

export const Feature = styled.li`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #333;

  &::marker {
    height: 10px;
    width: 10px;
    color: #547147;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
`;