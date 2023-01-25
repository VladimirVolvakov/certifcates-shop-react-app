// Components:
import AccordionFaq from "./components/AccordionFaq";
import Advantages from "./components/Advantages";
import BestOffer from "./components/BestOffer";
import Footer from "./components/Footer";
import GiftCertificate from "./components/GiftCertificate";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impressions from "./components/Impressions";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <>
      <OrderForm />
      <Header />
      <Hero />
      <Advantages />
      <Impressions />
      <BestOffer />
      <GiftCertificate />
      <AccordionFaq />
      <Footer />
    </>
  );
}

export default App;
