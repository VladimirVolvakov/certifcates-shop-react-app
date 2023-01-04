// Styles:
import { Button, Card, Image, Option, Price, Title } from "./ImpressionItem.styles";

const ImpressionItem = ({ title, image, price, offer }) => {
  return (
    <Card>
      <Image src={image} />
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Button>Заказать</Button>
      <Option>Подробнее</Option>
    </Card>
  );
};

export default ImpressionItem;