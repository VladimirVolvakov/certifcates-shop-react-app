// Styles:
import { Answer, Container, Question, Title } from "./AccordionFaq.styles";
// Accordion:
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const AccordionFaq = () => {
  return (
    <Container>
      <Title>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</Title>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <Question>Могу ли я купить сертификат в подарок?</Question>
          </AccordionHeader>
          <AccordionBody>
            <Answer>Что по кайфу, то и делайте.</Answer>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Question>Могу ли я поменять сертификат на другой?</Question>
          </AccordionHeader>
          <AccordionBody>
            <Answer>Что по кайфу, то и делайте.</Answer>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Question>Могу ли я купить сертификат в подарок?</Question>
          </AccordionHeader>
          <AccordionBody>
            <Answer>Что по кайфу, то и делайте.</Answer>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Question>Могу ли я поменять сертификат на другой?</Question>
          </AccordionHeader>
          <AccordionBody>
            <Answer>Что по кайфу, то и делайте.</Answer>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Question>Могу ли я купить сертификат в подарок?</Question>
          </AccordionHeader>
          <AccordionBody>
            <Answer>Что по кайфу, то и делайте.</Answer>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default AccordionFaq;
