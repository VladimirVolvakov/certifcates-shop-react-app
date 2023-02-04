// Styles:
import { CloseButtonContainer, ContactsContainer, Container, Image, ImageText, LinksList, LinksContainer,
  Link, LogoContainer, LinkItem, MenuBtn, PhoneNumber, SocialMediaImage, BurgerMenu, SocialMediaContainer } from "./Header.styles.js";
// Images:
import InstaIcon from "../assets/icons/InstagramIcon.png";
import LogoImage from "../assets/icons/Group_54.png";
import LogoText from "../assets/icons/Group.png";
import MenuButton from "../assets/icons/MenuButton.png";
import VkIcon from "../assets/icons/VkIcon.png";
// Hook:
import { useState } from "react";

const Header = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  const openBurgerMenu = () => setIsBurgerMenuOpened(true);
  const closeBurgerMenu = () => setIsBurgerMenuOpened(false);

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
        <PhoneNumber>
          <Link href="tel:+380501234567">+38-050-123-45-67</Link>
        </PhoneNumber>
        <Link href="https://vk.com/daridushoi">
          <SocialMediaImage src={VkIcon} />
        </Link>
        <Link href="https://www.instagram.com/daridushoi">
          <SocialMediaImage src={InstaIcon} />
        </Link>
        { !isBurgerMenuOpened && (<MenuBtn src={MenuButton} onClick={openBurgerMenu} />)}
      </ContactsContainer>
      { isBurgerMenuOpened && (<BurgerMenu>
        <CloseButtonContainer onClick={closeBurgerMenu}>
          ✕
        </CloseButtonContainer>
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
        <SocialMediaContainer>
          <Link href="https://vk.com/daridushoi">
            <SocialMediaImage src={VkIcon} />
          </Link>
          <Link href="https://www.instagram.com/daridushoi">
            <SocialMediaImage src={InstaIcon} />
          </Link>
        </SocialMediaContainer>
      </BurgerMenu>)}
    </Container>
  );
};

export default Header;
