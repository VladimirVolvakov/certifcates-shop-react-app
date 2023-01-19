// Styles:
import { ContactsContainer, Container, Image, ImageText, LinksList, LinksContainer, LogoContainer, Link, MenuBtn, 
  PhoneNumber, SocialMediaImage } from './Header.styles.js';
// Images:
import InstaIcon from '../assets/icons/InstagramIcon.png';
import LogoImage from '../assets/icons/Group_54.png';
import LogoText from '../assets/icons/Group.png';
import MenuButton from '../assets/icons/MenuButton.png';
import VkIcon from '../assets/icons/VkIcon.png';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src={LogoImage} />
        <ImageText src={LogoText} />
      </LogoContainer>
      <LinksContainer>
        <LinksList>
          <Link>Каталог</Link>
          <Link>Акции</Link>
          <Link>Контакты</Link>
        </LinksList>
      </LinksContainer>
      <ContactsContainer>
        <PhoneNumber>+38-050-123-45-67</PhoneNumber>
        <SocialMediaImage src={VkIcon} />
        <SocialMediaImage src={InstaIcon} />
        <MenuBtn src={MenuButton} />
      </ContactsContainer>
    </Container>
  );
};

export default Header;