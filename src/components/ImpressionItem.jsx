// Styles:
import { Button, Card, DescContainer, Image, LowerPart, Option, Price, Title, UpperPart } from "./ImpressionItem.styles";

const ImpressionItem = ({ title, image, price, offer }) => {
  return (
    <Card>
      <Image src={image} />
      <DescContainer>
        <UpperPart>
          <Title>{title}</Title>
        </UpperPart>
        <LowerPart>
          <Price>{price}</Price>
          <Button>Заказать</Button>
          <Option>Подробнее</Option>
        </LowerPart>
      </DescContainer>
    </Card>
  );
};

export default ImpressionItem;