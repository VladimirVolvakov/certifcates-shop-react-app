// Styles:
import { AdvantagesContainer, Description, Image } from './Advantages.styles';

const AdvantageItem = ({ image, description }) => {
  return (
    <AdvantagesContainer>
      <Image src={image} />
      <Description>{description}</Description>
    </AdvantagesContainer>
  );
};

export default AdvantageItem;