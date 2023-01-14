// Styles:
import { Container } from "./AccordionFaq.styles";
// Accordion:
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const AccordionFaq = () => {
  return (
    <Container>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title`}>Могу ли я купить сертификат в подарок?</h3>
          </AccordionHeader>
          <AccordionBody>
            <div className="accordion-body">Что по кайфу, то и делайте.</div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title`}>Могу ли я поменять сертификат на другой?</h3>
          </AccordionHeader>
          <AccordionBody>
            <div className="accordion-body">Что по кайфу, то и делайте.</div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title`}>Могу ли я купить сертификат в подарок?</h3>
          </AccordionHeader>
          <AccordionBody>
            <div className="accordion-body">Что по кайфу, то и делайте.</div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title`}>Могу ли я поменять сертификат на другой?</h3>
          </AccordionHeader>
          <AccordionBody>
            <div className="accordion-body">Что по кайфу, то и делайте.</div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title`}>Могу ли я купить сертификат в подарок?</h3>
          </AccordionHeader>
          <AccordionBody>
            <div className="accordion-body">Что по кайфу, то и делайте.</div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default AccordionFaq;
