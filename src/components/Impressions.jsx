// Styles:
import { Catalogue, CatalogueContainer, Title } from './Impressions.styles';
// Component:
import ImpressionItem from './ImpressionItem';
// Images:
import Aerotube from '../assets/images/Aerotube.png';
import AugmentedReality from '../assets/images/AugmentedReality.png';
import BicycleWalk from '../assets/images/BicycleWalk.png';
import Dome from '../assets/images/Dome.png';
import HorseRiding from '../assets/images/HorseRiding.png';
import Jeeps from '../assets/images/Jeeps.png';
import Paraplane from '../assets/images/Paraplane.png';
import Picnic from '../assets/images/Picnic.png';
import Quadrocycle from '../assets/images/Quadrocycle.png';
import SongRecording from '../assets/images/SongRecording.png';
import YachtWalk from '../assets/images/YachtWalk.png';

const impressionsArray = [
  {
    id: 1,
    title: 'Конная прогулка',
    image: HorseRiding,
    price: 'от 990 ₽',
    specialOffer: false
  },
  {
    id: 2,
    title: 'Полет на мотопараплане',
    image: Paraplane,
    price: '3 000 ₽',
    specialOffer: false
  },
  {
    id: 3,
    title: 'Полет в аэротрубе',
    image: Aerotube,
    price: 'от 1 800 ₽',
    specialOffer: true
  },
  {
    id: 4,
    title: 'Вечер в куполе',
    image: Dome,
    price: '3 000 ₽',
    specialOffer: false
  },
  {
    id: 5,
    title: 'Прогулка на яхте "Чайка"',
    image: YachtWalk,
    price: 'от 3 500 ₽',
    specialOffer: false
  },
  {
    id: 6,
    title: 'Велопрогулка с пикником',
    image: BicycleWalk,
    price: '3 000 ₽',
    specialOffer: false
  },
  {
    id: 7,
    title: 'Драйв на квадроциклах',
    image: Quadrocycle,
    price: 'от 1 800 ₽',
    specialOffer: false
  },
  {
    id: 8,
    title: 'Запись песни в студии',
    image: SongRecording,
    price: '5 000 ₽',
    specialOffer: false
  },
  {
    id: 9,
    title: 'Поездка на болотоходах',
    image: Jeeps,
    price: '3 500 ₽',
    specialOffer: false
  },
  {
    id: 10,
    title: 'Игра в Virtual Reality',
    image: AugmentedReality,
    price: '600 ₽',
    specialOffer: false
  },
  {
    id: 11,
    title: 'Романтический пикник',
    image: Picnic,
    price: '2 500 ₽',
    specialOffer: false
  }
];

const Impressions = ({ onOrderBtnClick, onDetailsButtonClick }) => {
  return (
    <CatalogueContainer id='catalog'>
      <Title>КАТАЛОГ ВПЕЧАТЛЕНИЙ</Title>
      <Catalogue>
        { impressionsArray.map(impression => (
          <ImpressionItem 
            key={impression.id} 
            title={impression.title} 
            image={impression.image} 
            price={impression.price} 
            offer={impression.specialOffer}
            onOrderBtnClick={onOrderBtnClick}
            onDetailsButtonClick={onDetailsButtonClick}
          />
        )) }
      </Catalogue>
    </CatalogueContainer>
  );
};

export default Impressions;