// Styles:
import { Button, Container, Image, Price, Slide, Title } from './Hero.styles';
// Images:
import HeroDome from '../assets/images/HeroDome.png';
import HeroParaplane from '../assets/images/HeroParaplane.png';
import HeroRiding from '../assets/images/HeroRiding.png';
import HeroYacht from '../assets/images/HeroYacht.png';
// Carousel:
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slidesArray = [
  {
    id: 'i1',
    image: HeroYacht,
    description: 'Прогулка на яхте "Чайка"',
    price: 'от 3 500 ₽'
  },
  {
    id: 'i2',
    image: HeroDome,
    description: 'Вечер в куполе',
    price: 'от 3 000 ₽'
  },
  {
    id: 'i3',
    image: HeroRiding,
    description: 'Конная прогулка',
    price: 'от 990 ₽'
  },
  {
    id: 'i4',
    image: HeroParaplane,
    description: 'Полет на мотопараплане',
    price: '3 000 ₽'
  }
];

const Hero = () => {
  return (
    <Container>
      <Carousel 
        className="carousel" 
        showArrows 
        autoPlay 
        infiniteLoop 
        showStatus={false}
        showThumbs={false}
        swipeable
        transitionTime={400}
      >
        { slidesArray.map(slide => (
          <Slide key={slide.id} background={slide.image}>
            <Image src={slide.image} alt={slide.description} />
            <Price>{slide.price}</Price>
            <Title>{slide.description}</Title>
            <Button>Заказать впечатление</Button>
          </Slide>
        )) }
      </Carousel>
    </Container>
  );
};

export default Hero;