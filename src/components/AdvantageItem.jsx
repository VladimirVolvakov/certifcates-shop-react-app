// Styles:
import { ItemContainer, Description, Image } from './AdvantageItem.styles';

const AdvantageItem = ({ image, description }) => {
  return (
    <ItemContainer>
      <Image src={image} />
      <Description>{description}</Description>
    </ItemContainer>
  );
};

export default AdvantageItem;