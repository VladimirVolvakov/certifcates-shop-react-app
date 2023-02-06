// Styles: 
import { Container, Wrapper } from './DetailsPopup.styles';

const DetailsPopup = ({ children }) => {
  return (
    <>
      <Container />
      <Wrapper>
        { children }
      </Wrapper>
    </>
  );
};

export default DetailsPopup;