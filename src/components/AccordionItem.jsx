// Hook:
import { useState } from "react";
// Styles:
import { AccordionBody, AccordionHeader, AccordionItm, Answer, Question, Toggler} from "./AccordionItem.styles";

const AccordionItem = ({ title, content }) => {
  const [isOpened, setIsOpened] = useState(false);

  const headerClickHandler = () => {
    setIsOpened(!isOpened);
  };

  return (
    <AccordionItm>
      <AccordionHeader onClick={headerClickHandler}>
        <Question>{title}</Question>
        <Toggler>{ isOpened ? '-' : '+' }</Toggler>
      </AccordionHeader>
      { isOpened && (
        <AccordionBody>
          <Answer>{content}</Answer>
        </AccordionBody>
      ) }
    </AccordionItm>
  );
};

export default AccordionItem;