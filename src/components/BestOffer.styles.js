import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 100px;
`;

export const Offer = styled.div`
  height: 450px;
  background-image: url(${props => props.background});
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  overflow: hidden;
`;

export const Info = styled.div`
  max-width: 770px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  width: 530px;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Header = styled.h3`
  background: #547147;
  padding: 15px 60px;
  margin-bottom: 20px;
  border-radius: 0 10px 10px 0;
  font-size: 30px;
  line-height: 34px;
  font-weight: 500;
  color: #fff;
`;

export const Title = styled.h2`
  max-width: 640px;
  padding-left: 60px;
  margin-bottom: 25px;
  font-size: 50px;
  line-height: 54px;
  font-weight: 700;
  color: #404936;
  text-align: left;
`;

export const PriceChange = styled.div`
  padding-left: 60px;
  margin-bottom: 31px;
  display: flex;
  align-items: center;
`;

export const OldPrice = styled.div`
  font-size: 26px;
  line-height: 34px;
  font-weight: 500;
  color: #a3a3a3;
  text-decoration: line-through;
  margin-right: 31px;
`;

export const NewPrice = styled.div`
  font-size: 34px;
  line-height: 34px;
  font-weight: 700;
  color: #404936;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
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