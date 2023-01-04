// Styles:
import { Button, Card, DescContainer, Image, Option, Price, Title } from "./ImpressionItem.styles";

const ImpressionItem = ({ title, image, price, offer }) => {
  return (
    <Card>
      <Image src={image} />
      <DescContainer>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Button>Заказать</Button>
        <Option>Подробнее</Option>
      </DescContainer>
    </Card>
  );
};

export default ImpressionItem;