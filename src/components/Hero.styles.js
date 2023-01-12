import styled from "styled-components";

export const Container = styled.div`
  height: 632px;
  width: 100%;
  max-width: 1300px;
  margin: 40px auto 70px;
  border-radius: 20px;
  overflow: hidden;
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
`;

export const Image = styled.img``;

export const Price = styled.div`
  background: #dfa650;
  padding: 10px 20px;
  border-radius: 40px;
  font-size: 30px;
  line-height: 34px;
  font-weight: 700;
  color: #fff;
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
`;