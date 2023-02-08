// Styles:
import { Button, Card, DescContainer, Image, LowerPart, Option, Price, Title, UpperPart } from "./ImpressionItem.styles";


const ImpressionItem = ({ title, image, price, offer, onOrderBtnClick, onDetailsButtonClick }) => {
  
  return (
    <Card>
      <Image src={image} />
      <DescContainer>
        <UpperPart>
          <Title>{title}</Title>
        </UpperPart>
        <LowerPart>
          <Price>{price}</Price>
          <Button onClick={onOrderBtnClick}>Заказать</Button>
          <Option onClick={onDetailsButtonClick}>Подробнее</Option>
        </LowerPart>
      </DescContainer>
    </Card>
  );
};

export default ImpressionItem;