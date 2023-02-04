import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 1300px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 90px 40px 40px 40px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  @media (max-width: 375px) {
    max-width: 335px;
    padding: 45px 20px 20px 20px;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
  }
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

  @media (max-width: 375px) {
    top: 20px;
    right: 20px;
    font-size: 15px;
  }
`;

export const PhotoCarousel = styled.div`
  width: 450px;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 375px) {
    width: 295px;
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
`;

export const Image = styled.img`
  border-radius: 20px;
  overflow: hidden;
`;

export const Description = styled.div`
  width: 730px;

  @media (max-width: 375px) {
    width: 295px;
  }
`;

export const Header = styled.div`
  width: 394px;
  margin-bottom: 40px;

  @media (max-width: 375px) {
    width: 295px;
    margin-bottom: 30px;
  }
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

  @media (max-width: 375px) {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
  }
`;

export const Price = styled.h2`
  font-size: 50px;
  line-height: 54px;
  font-weight: 700;
  color: #333;

  @media (max-width: 375px) {
    font-size: 30px;
    line-height: 34px;
    font-weight: 600;
  }
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

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
    padding: 11px 22px;
    width: 100%;
  }
`;

export const Main = styled.div``;

export const Subheader = styled.h4`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 15px;
  }
`;