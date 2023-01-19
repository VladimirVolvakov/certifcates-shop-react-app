import styled from "styled-components";

export const Container = styled.div`
  height: 632px;
  width: 100%;
  max-width: 1300px;
  margin: 40px auto 70px;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 375px) {
    height: 380px;
    max-width: 335px;
    margin: 20px auto 30px;
  }
`;

export const Slide = styled.div`
  background-image: url(${props => props.background});
  height: 632px;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;

  @media (max-width: 375px) {
    height: 380px;
    background-size: cover;
    background-position: center;
    padding: 20px;
  }
`;

export const Price = styled.div`
  background: #dfa650;
  padding: 10px 20px;
  border-radius: 40px;
  font-size: 30px;
  line-height: 34px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 375px) {
    padding: 6px 10px;
    border: 2px solid #dfa650;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Title = styled.h2`
  min-width: 500px;
  max-width: 666px;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 80px;
  line-height: 84px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: 375px) {
    min-width: auto;
    max-width: 270px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 32px;
  }
`;

export const Button = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 50px;
  background: #f6f1e4;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #333;
    color: #f6f1e4;
  }

  @media (max-width: 375px) {
    padding: 11px 22px;
    margin-bottom: 50px;
    border-radius: 40px;
    font-size: 14px;
    line-height: 18px;
  }
`;