import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 60px;
`;

export const TextContainer = styled.div``;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
  color: #404936;
  margin-bottom: 30px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-left: 20px;
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
`;