// Styles:
import { Button, Container, Header, Image, ImageContainer, Info, NewPrice, Offer, OldPrice, PriceChange, Title } from "./BestOffer.styles";
// Images:
import Aerotube from "../assets/images/Aerotube.png";
import HorseRiding from "../assets/images/HorseRiding.png";
import SpecialOfferBackground from "../assets/images/SpecialOfferBackground.png";
// Carousel:
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const offersArray = [
  { 
    id: 'o1',
    title: 'ПОЛЁТ В АЭРОТРУБЕ ДЛЯ ДВОИХ!',
    oldPrice: '4 000 ₽',
    newPrice: '3 200 ₽',
    image: Aerotube
  },
  { 
    id: 'o2', 
    title: 'КОННАЯ ПРОГУЛКА ДЛЯ ДВОИХ!',
    oldPrice: '2 000 ₽',
    newPrice: '1 500 ₽',
    image: HorseRiding
  }
];

const BestOffer = ({ onOrderBtnClick }) => {
  return (
    <Container id="bestoffer">
      <Carousel 
        className="carousel" 
        showArrows={false} 
        autoPlay={false} 
        infiniteLoop={false} 
        showStatus={false}
        showThumbs={false}
        swipeable
        transitionTime={400}
      >
        { offersArray.map(offer => (
          <Offer key={offer.id} background={SpecialOfferBackground}>
            <Info>
              <Header>АКЦИЯ МЕСЯЦА</Header>
              <Title>{offer.title}</Title>
              <PriceChange>
                <OldPrice>{offer.oldPrice}</OldPrice>
                <NewPrice>{offer.newPrice}</NewPrice>
              </PriceChange>
              <Button onClick={onOrderBtnClick}>Заказать впечатление</Button>
            </Info>
            <ImageContainer>
              <Image src={offer.image} alt={offer.title} />
            </ImageContainer>
          </Offer>
        )) }
      </Carousel>
    </Container>
  );
};

export default BestOffer;