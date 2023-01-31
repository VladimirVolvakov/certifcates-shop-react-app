import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 90px 40px 40px 40px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    font-weight: 800;
  }
`;

export const PhotoCarousel = styled.div`
  width: 450px;
  border-radius: 20px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  border-radius: 20px;
`;

export const Image = styled.img`
  border-radius: 20px;
`;

export const Description = styled.div`
  width: 730px;
`;

export const Header = styled.div`
  width: 394px;
  margin-bottom: 40px;
`;

export const UpperPart = styled.div``;

export const MiddlePart = styled.div`
  margin: 20px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  color: #333;
`;

export const Price = styled.h2`
  font-size: 50px;
  line-height: 54px;
  font-weight: 700;
  color: #333;
`;

export const Select = styled.select`
  background: #e8e8e8;
  border: none;
  border-radius: 40px;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #333;
  padding: 10px 10px 10px 20px;
`;

export const Option = styled.option`
  background: #e8e8e8;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #333;
  padding: 10px 0 10px 20px;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
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

export const Main = styled.div``;

export const Subheader = styled.h4`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;