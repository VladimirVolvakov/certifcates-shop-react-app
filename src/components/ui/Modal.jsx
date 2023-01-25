// Styles: 
import { Container, Wrapper } from './Modal.styles';

const Modal = ({ children, onPopupClick }) => {
  return (
    <>
      <Container onClick={onPopupClick} />
      <Wrapper>
        { children }
      </Wrapper>
    </>
  );
};

export default Modal;