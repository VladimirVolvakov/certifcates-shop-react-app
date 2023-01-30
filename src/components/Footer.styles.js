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

  @media (max-width: 375px) {
    max-width: 335px;
    padding-top: 30px;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 30px;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 375px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 261px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
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

  @media (max-width: 375px) {
    margin-bottom: 30px;
  }
`;

export const MenuContainer = styled.div`
  @media (max-width: 375px) {
    margin-right: 35px;
  }
`;

export const MenuHeader = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 24px;
  }
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

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ContactsContainer = styled.div`
  height: 94px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 375px) {
    width: 200px;
  }
`;

export const SocialMedia = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const RequestContainer = styled.div`
  width: 420px;

  @media (max-width: 375px) {
    // height: 136px;
    width: 335px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  line-height: 34px;
  font-weight: 600;
  color: #333;

  @media (max-width: 375px) {
    font-size: 21px;
    line-height: 25px;
  }
`;

export const CallUs = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  margin: 15px 0 20px;

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
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

  @media (max-width: 375px) {
    padding: 11px 22px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const RightsContainer = styled.div`
  display: none;

  @media (max-width: 375px) {
    display: block;
  }
`;