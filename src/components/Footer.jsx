// Styles:
import { Button, CallUs, ContactsContainer, Container, Image, Logo, LogoContainer, Menu, MenuContainer, MenuHeader, MenuItem, RequestContainer, RightsContainer, SocialMedia, Text, Title } from './Footer.styles';
// Images:
import InstaIcon from '../assets/icons/InstagramIcon.png';
import LogoImage from '../assets/icons/LogoImage.png';
import LogoText from '../assets/icons/LogoText.png';
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
        <Title>+38-050-123-45-67</Title>
        <SocialMedia>
          <Image src={VkIcon} />
          <Image src={InstaIcon} />
        </SocialMedia>
      </ContactsContainer>
      <RequestContainer>
        <Title>Остались вопросы?</Title>
        <CallUs>Оставьте заявку, мы свяжемся с Вами <br/> в ближайшее время</CallUs>
        <Button>Оставить заявку</Button>
      </RequestContainer>
      <RightsContainer>
        <Text>Все права защищены © Дари Душой, 2023 г.</Text>
      </RightsContainer>
    </Container>
  );
};

export default Footer;