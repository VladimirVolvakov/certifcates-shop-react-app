import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  height: 96px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  border-bottom: 1px solid #547147;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 375px) {
    height: 60px;
    max-width: 335px;
  }
`;

export const LogoContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 375px) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const Image = styled.img`
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  @media (max-width: 375px) {
    height: 43px;
  }
`;

export const ImageText = styled.img`
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  @media (max-width: 375px) {
    display: none;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 40px;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

export const LinkItem = styled.li`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
  transition: all 0.3s;
  border-bottom: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #404936;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

export const PhoneNumber = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;

  @media (max-width: 375px) {
    color: #404936;
  }
`;

export const SocialMediaImage = styled.img`
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const MenuBtn = styled.img`
  display: none;

  @media (max-width: 375px) {
    display: block;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
  }
`;

const menuAppearance = keyframes`
  0% {
    transform: translateX(150px);
  }
  100%{
    transform: translateX(0px);
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 375px) {
    position: fixed;
    top: 0;
    right: 0px;
    bottom: 0;
    width: 150px;
    padding: 10px 15px 20px 20px;
    background-color: #F6EDD9;
    display: flex;
    flex-direction: column;
    animation: 1s ${menuAppearance};
    z-index: 99;
  }
`;

export const CloseButtonContainer = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #547147;
  align-self: flex-end;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    font-weight: 800;
  }
`;

export const BMLinksContainer = styled.div`
  margin-bottom: 30px;
`;

export const BMLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
`;

export const BMLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

export const BMLinkItem = styled.li`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: #547147;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
`;

export const SMImage = styled.img`
  margin-right: 20px;
`;