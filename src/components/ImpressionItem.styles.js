import styled from "styled-components";

export const Card = styled.div`
  height: 681px;
  width: 407px;
  background: #fff;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled.img``;

export const DescContainer = styled.div`
  height: 297px;
  width: 407px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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
`;

export const Price = styled.h2`
  font-size: 40px;
  line-height: 44px;
  font-weight: 600;
  color: #333;
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
`;