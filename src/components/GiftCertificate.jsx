// Styles:
import { Container, Feature, FeaturesList, Image, TextContainer, Title } from './GiftCertificate.styles';
// Image:
import Certificates from '../assets/images/Certificates.png';

const GiftCertificate = () => {
  return (
    <Container>
      <Image src={Certificates} />
      <TextContainer>
      <Title>СЕРТИФИКАТ В ДИЗАЙНЕРСКОМ КОНВЕРТЕ</Title>
        <FeaturesList>
          <Feature>Электронный сертификат - бесплатный</Feature>
          <Feature>Сертификат в подарочном конверте - 200 руб.</Feature>
          <Feature>Срок действия сертификата - 3 месяца</Feature>
          <Feature>Бесплатная доставка в день заказа</Feature>
          <Feature>Есть возможность заменить впечатление по сертификату, если подарок не понравится</Feature>
        </FeaturesList>
      </TextContainer>
    </Container>
  );
};

export default GiftCertificate;