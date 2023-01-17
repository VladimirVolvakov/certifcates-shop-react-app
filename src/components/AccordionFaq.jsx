// Styles:
import { Accordion, Container, Title } from "./AccordionFaq.styles";
// Component:
import AccordionItem from "./AccordionItem";

const faqData = [
  {
    id: 1,
    title: 'Могу ли я купить сертификат в подарок?',
    content: 'Что по кайфу, то и делайте.'
  },
  {
    id: 2,
    title: 'Могу ли я поменять сертификат на другой?',
    content: 'Что по кайфу, то и делайте.'
  },
  {
    id: 3,
    title: 'Могу ли я купить сертификат в подарок?',
    content: 'Что по кайфу, то и делайте.'
  },
  {
    id: 4,
    title: 'Могу ли я поменять сертификат на другой?',
    content: 'Что по кайфу, то и делайте.'
  },
  {
    id: 5,
    title: 'Могу ли я купить сертификат в подарок?',
    content: 'Что по кайфу, то и делайте.'
  },
];

const AccordionFaq = () => {
  return (
    <Container>
      <Title>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</Title>
      <Accordion>
        { faqData.map(question => (
          <AccordionItem 
            key={question.id} 
            title={question.title} 
            content={question.content} 
          />
        )) }       
      </Accordion>
    </Container>
  );
};

export default AccordionFaq;
