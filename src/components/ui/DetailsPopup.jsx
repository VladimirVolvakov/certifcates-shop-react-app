// Styles: 
import { Container, Wrapper } from './DetailsPopup.styles';

const DetailsPopup = ({ children, onPopupClose }) => {
  return (
    <>
      <Container onClick={onPopupClose} />
      <Wrapper>
        { children }
      </Wrapper>
    </>
  );
};

export default DetailsPopup;