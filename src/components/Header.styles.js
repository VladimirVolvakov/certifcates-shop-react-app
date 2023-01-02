import styled from 'styled-components';

export const Container = styled.header`
  height: 96px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  border-bottom: 1px solid #547147;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img``;

export const LinksContainer = styled.div``;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 40px;
`;

export const Link = styled.li`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
`;

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const PhoneNumber = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
`;