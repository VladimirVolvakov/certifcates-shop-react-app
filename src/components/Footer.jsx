// Styles:
import { Button, CallUs, ContactsContainer, Container, Image, Logo, LogoContainer, Menu, MenuContainer, MenuHeader, MenuItem, PhoneNumber, RequestContainer, SocialMedia, Text, Title } from './Footer.styles';
// Images:
import InstaIcon from '../assets/icons/InstagramIcon.png';
import LogoImage from '../assets/icons/Group_54.png';
import LogoText from '../assets/icons/Group.png';
import VkIcon from '../assets/icons/VkIcon.png';

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>
          <Image src={LogoImage} />
          <Image src={LogoText} />
        </Logo>
        <Text>Все права защищены</Text>
        <Text>© Дари Душой, 2023 г.</Text>
      </LogoContainer>
      <MenuContainer>
        <MenuHeader>Меню</MenuHeader>
        <Menu>
          <MenuItem>Каталог</MenuItem>
          <MenuItem>Акции</MenuItem>
          <MenuItem>Контакты</MenuItem>
        </Menu>
      </MenuContainer>
      <ContactsContainer>
        <PhoneNumber>+38-050-123-45-67</PhoneNumber>
        <SocialMedia>
          <Image src={VkIcon} />
          <Image src={InstaIcon} />
        </SocialMedia>
      </ContactsContainer>
      <RequestContainer>
        <Title>Остались вопросы?</Title>
        <CallUs>Оставьте заявку, мы свяжемся с Вами в ближайшее время</CallUs>
        <Button>Оставить заявку</Button>
      </RequestContainer>
    </Container>
  );
};

export default Footer;