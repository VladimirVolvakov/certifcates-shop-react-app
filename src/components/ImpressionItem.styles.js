import styled from "styled-components";

export const Card = styled.div`
  height: 681px;
  width: 407px;
  background: #fff;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 375px) {
    height: 314px;
    width: 158px;
    border-radius: 8px;

    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const Image = styled.img`
  @media (max-width: 375px) {
    width: 158px;
  }
`;

export const DescContainer = styled.div`
  height: 297px;
  width: 407px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 375px) {
    height: 164px;
    width: 158px;
  }
`;

export const Title = styled.h3`
  font-size: 30px;
  line-height: 34px;
  font-weight: 600;
  color: #333;
  min-width: 239px;
  max-width: 347px;
  text-align: center;
  margin: 20px auto;

  @media (max-width: 375px) {
    margin: 0 auto 10px;
    min-width: 138px;
    max-width: 138px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Price = styled.h2`
  font-size: 40px;
  line-height: 44px;
  font-weight: 600;
  color: #333;

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 21px;
  padding: 12px 24px;
  border-radius: 40px;
  border: none;
  background: #547147;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #547900;
    opacity: 0.8;
  }

  @media (max-width: 375px) {
    margin: 10px auto;
    padding: 8px 40px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Option = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #888;
  border-bottom: 1px solid transparent;
  text-align: center;
  margin-bottom: 28px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #888;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 12px;
  }
`;