import styled from "styled-components";

export const Container = styled.div`
  height: 285px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 60px;
  border-top: 1px solid #547147;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.div`
  width: 261px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
`;

export const Image = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: #888;
`;

export const MenuContainer = styled.div``;

export const MenuHeader = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuItem = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
`;

export const ContactsContainer = styled.div`
  height: 94px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialMedia = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const RequestContainer = styled.div`
  width: 420px;
`;

export const Title = styled.h2`
  font-size: 30px;
  line-height: 34px;
  font-weight: 600;
  color: #333;
`;

export const CallUs = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  margin: 15px 0 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
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