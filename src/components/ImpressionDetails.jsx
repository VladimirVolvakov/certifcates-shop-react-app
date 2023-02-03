// Styles: 
import { Button, CloseButton, Container, Description, Header, Image, ImageContainer, Main, MiddlePart, Option, PhotoCarousel, Price, Select, Subheader, Title, UpperPart } from "./ImpressionDetails.styles";
// Impressions information:
import { impressionsData } from "../data";
// Carousel:
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImpressionDetails = () => {
  return (
    <Container>
      <CloseButton>✕</CloseButton>
      <PhotoCarousel>
        <Carousel 
          className="carousel" 
          showArrows={false} 
          autoPlay={false} 
          infiniteLoop 
          showStatus={false}
          showThumbs
          swipeable
          transitionTime={400}
        >
          { impressionsData[4].imgSrc.map(src => (
            <ImageContainer key={impressionsData[4].id}>
              <Image src={src} alt={impressionsData[4].title} />
            </ImageContainer>
          )) }
        </Carousel>
      </PhotoCarousel>
      <Description>
        <Header>
          <UpperPart>
            <Title>{ impressionsData[4].title }</Title>
          </UpperPart>
          <MiddlePart>
            <Price>{ impressionsData[4].options[0].price}</Price>
            { impressionsData[4].options.length > 1 && (<Select name="impression_options">
              <Option value={impressionsData[4].options[0].feature}>{ impressionsData[4].options[0].feature }</Option>
              <Option value={impressionsData[4].options[1].feature}>{ impressionsData[4].options[1].feature }</Option>
              <Option value={impressionsData[4].options[2].feature}>{ impressionsData[4].options[2].feature }</Option>
            </Select>)}
          </MiddlePart>
          <Button>Заказать впечатление</Button>
        </Header>
        <Main>
          <Subheader>Подробнее о впечатлении</Subheader>
          {impressionsData[4].options[0].description}
        </Main>
      </Description>
    </Container>
  );
};

export default ImpressionDetails;