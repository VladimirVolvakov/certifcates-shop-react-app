// Styles:
import { ContactsContainer, Container, Image, LinksList, LinksContainer, LogoContainer, Link, PhoneNumber } from './Header.styles.js';
// Images:
import InstaIcon from '../assets/icons/InstagramIcon.png';
import LogoImage from '../assets/icons/Group_54.png';
import LogoText from '../assets/icons/Group.png';
import VkIcon from '../assets/icons/VkIcon.png';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src={LogoImage} />
        <Image src={LogoText} />
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
        <Image src={VkIcon} />
        <Image src={InstaIcon} />
      </ContactsContainer>
    </Container>
  );
};

export default Header;