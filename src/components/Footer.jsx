// Styles:
import { Button, CallUs, ContactsContainer, Container, Image, Link, Logo, 
  LogoContainer, Menu, MenuContainer, MenuHeader, MenuItem, RequestContainer, 
  RightsContainer, SocialMedia, Text, Title } from "./Footer.styles";
// Images:
import InstaIcon from "../assets/icons/InstagramIcon.png";
import LogoImage from "../assets/icons/LogoImage.png";
import LogoText from "../assets/icons/LogoText.png";
import VkIcon from "../assets/icons/VkIcon.png";

const Footer = ({ onOrderBtnClick }) => {
  return (
    <Container id="footer">
      <LogoContainer>
        <Logo>
          <Link href="#">
            <Image src={LogoImage} />
          </Link>
          <Link href="#">
            <Image src={LogoText} />
          </Link>
        </Logo>
        <Text>Все права защищены</Text>
        <Text>© Дари Душой, 2023 г.</Text>
      </LogoContainer>
      <MenuContainer>
        <MenuHeader>Меню</MenuHeader>
        <Menu>
          <MenuItem>
            <Link href="#catalog">Каталог</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#bestoffer">Акции</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#footer">Контакты</Link>
          </MenuItem>
        </Menu>
      </MenuContainer>
      <ContactsContainer>
        <Title>
          <Link href="tel:+380501234567">+38-050-123-45-67</Link>
        </Title>
        <SocialMedia>
          <Link href="https://vk.com/daridushoi">
            <Image src={VkIcon} />
          </Link>
          <Link href="https://www.instagram.com/daridushoi">
            <Image src={InstaIcon} />
          </Link>
        </SocialMedia>
      </ContactsContainer>
      <RequestContainer>
        <Title>Остались вопросы?</Title>
        <CallUs>
          Оставьте заявку, мы свяжемся с Вами <br /> в ближайшее время
        </CallUs>
        <Button onClick={onOrderBtnClick}>Оставить заявку</Button>
      </RequestContainer>
      <RightsContainer>
        <Text>Все права защищены © Дари Душой, 2023 г.</Text>
      </RightsContainer>
    </Container>
  );
};

export default Footer;
