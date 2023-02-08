// Components:
import AccordionFaq from "./components/AccordionFaq";
import Advantages from "./components/Advantages";
import BestOffer from "./components/BestOffer";
import DetailsPopup from "./components/ui/DetailsPopup";
import Footer from "./components/Footer";
import GiftCertificate from "./components/GiftCertificate";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpressionDetails from "./components/ImpressionDetails";
import Impressions from "./components/Impressions";
import Modal from "./components/ui/Modal";
import OrderForm from "./components/OrderForm";
// Hooks:
import { useState } from "react";

function App() {
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
  const [isDetailsPopupOpen, setIsDetailsPopupOpen] = useState(false);

  const onOrderBtnClickHandler = () => setIsOrderPopupOpen(true);
  const closePopupHandler = () => setIsOrderPopupOpen(false);

  const onDetailsBtnClickHandler = () => setIsDetailsPopupOpen(true);
  const onCloseBtnClickHandler = () => setIsDetailsPopupOpen(false);

  return (
    <>
      { isOrderPopupOpen && (
        <Modal onPopupClick={closePopupHandler}>
          <OrderForm />
        </Modal>
      ) }
      { isDetailsPopupOpen && (
        <DetailsPopup onPopupClose={onCloseBtnClickHandler}>
          <ImpressionDetails onPopupClose={onCloseBtnClickHandler} />
        </DetailsPopup>
      )}
      <Header />
      <Hero onOrderBtnClick={onOrderBtnClickHandler} />
      <Advantages />
      <Impressions onDetailsButtonClick={onDetailsBtnClickHandler} onOrderBtnClick={onOrderBtnClickHandler} />
      <BestOffer onOrderBtnClick={onOrderBtnClickHandler} />
      <GiftCertificate />
      <AccordionFaq />
      <Footer onOrderBtnClick={onOrderBtnClickHandler} />
    </>
  );
}

export default App;
