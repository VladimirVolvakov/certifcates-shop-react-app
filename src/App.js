// Components:
import AccordionFaq from "./components/AccordionFaq";
import Advantages from "./components/Advantages";
import BestOffer from "./components/BestOffer";
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

  const onOrderBtnClickHandler = () => setIsOrderPopupOpen(true);
  const closePopupHandler = () => setIsOrderPopupOpen(false);

  return (
    <>
      { isOrderPopupOpen && (
        <Modal purpose="order" onPopupClick={closePopupHandler}>
          <OrderForm />
        </Modal>
      ) }
      <ImpressionDetails />
      <Header />
      <Hero onOrderBtnClick={onOrderBtnClickHandler} />
      <Advantages />
      <Impressions onOrderBtnClick={onOrderBtnClickHandler} />
      <BestOffer onOrderBtnClick={onOrderBtnClickHandler} />
      <GiftCertificate />
      <AccordionFaq />
      <Footer onOrderBtnClick={onOrderBtnClickHandler} />
    </>
  );
}

export default App;
