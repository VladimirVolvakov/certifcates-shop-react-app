// Styles:
import { AdvantagesContainer } from './Advantages.styles';
// Component:
import AdvantageItem from './AdvantageItem';
// Icons:
import Certificate from '../assets/icons/Certificate.png';
import Delivery from '../assets/icons/Delivery.png';
import Handshake from '../assets/icons/Handshake.png';
import Success from '../assets/icons/Success.png';

const advantagesArray = [
  {
    id: 1,
    image: Success,
    description: 'Впечатления по цене партнёра'
  }, 
  {
    id: 2,
    image: Delivery,
    description: 'Бесплатная доставка в день заказа'
  }, 
  {
    id: 3,
    image: Certificate,
    description: 'Красивые сертификаты на любое впечатление'
  }, 
  {
    id: 4,
    image: Handshake,
    description: 'Проверенные партнёры'
  }
];

const Advantages = () => {
  return (
    <AdvantagesContainer>
      { advantagesArray.map(advantage => (
        <AdvantageItem 
          key={advantage.id} 
          image={advantage.image} 
          description={advantage.description} 
        />
      )) }
    </AdvantagesContainer>
  );
};

export default Advantages;