// Styles:
import { ContactsContainer, Container, Image, ImageText, LinksList, 
  LinksContainer,   Link, LogoContainer, LinkItem, MenuBtn, PhoneNumber, 
  SocialMediaImage } from "./Header.styles.js";
// Images:
import InstaIcon from "../assets/icons/InstagramIcon.png";
import LogoImage from "../assets/icons/Group_54.png";
import LogoText from "../assets/icons/Group.png";
import MenuButton from "../assets/icons/MenuButton.png";
import VkIcon from "../assets/icons/VkIcon.png";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src={LogoImage} />
        <ImageText src={LogoText} />
      </LogoContainer>
      <LinksContainer>
        <LinksList>
          <LinkItem>
            <Link href="#catalog">Каталог</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#bestoffer">Акции</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#footer">Контакты</Link>
          </LinkItem>
        </LinksList>
      </LinksContainer>
      <ContactsContainer>
        <PhoneNumber>+38-050-123-45-67</PhoneNumber>
        <Link href="https://vk.com">
          <SocialMediaImage src={VkIcon} />
        </Link>
        <Link href="https://instagram.com">
          <SocialMediaImage src={InstaIcon} />
        </Link>
        <MenuBtn src={MenuButton} />
      </ContactsContainer>
    </Container>
  );
};

export default Header;
