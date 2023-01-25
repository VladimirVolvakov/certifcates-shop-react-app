// Styles:
import { Button, Checkbox, Container, ErrorText, Form, Header, Input, InputDiv, Label, PersonalData, Subheader, Textarea, UnderlinedText } from "./OrderForm.styles";
// Hook:
import { useState } from "react";

const OrderForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const [nameValueIsValid, setNameValueIsValid] = useState(false);
  const [phoneValueIsValid, setPhoneValueIsValid] = useState(false);

  const [nameInputWasTouched, setNameInputWasTouched] = useState(false);
  const [phoneInputWasTouched, setPhoneInputWasTouched] = useState(false);

  const nameValueChangeHandler = event => {
    setNameValue(event.target.value);

    if (event.target.value.trim() !== "") {
      setNameValueIsValid(true);
    };
  };

  const phoneValueChangeHandler = event => {
    setPhoneValue(event.target.value);

    if (event.target.value.trim() !== "") {
      setPhoneValueIsValid(true);
    };
  };

  const commentValueChangeHandler = event => setCommentValue(event.target.value);

  const nameInputBlurHandler = event => {
    setNameInputWasTouched(true);

    if (nameValue.trim() === "") {
      setNameValueIsValid(false);
    };
  };

  const phoneInputBlurHandler = event => {
    setPhoneInputWasTouched(true);

    if (phoneValue.trim() === "") {
      setPhoneValueIsValid(false);
    }
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setNameInputWasTouched(true);
    setPhoneInputWasTouched(true);

    if (nameValue.trim() === "") {
      setNameValueIsValid(false);
      return;
    };

    if (phoneValue.trim() === "") {
      setPhoneValueIsValid(false);
      return;
    }

    setNameValueIsValid(true);
    setPhoneValueIsValid(true);

    console.log({
      name: nameValue,
      phone: phoneValue,
      comment: commentValue
    });

    setNameValue("");
    setPhoneValue("");
    setCommentValue("");
  };

  const nameValueIsInvalid = !nameValueIsValid && nameInputWasTouched;
  const phoneValueIsInvalid = !phoneValueIsValid && phoneInputWasTouched;

  return (
    <Container>
      <Header>Отправьте заявку</Header>
      <Subheader>Мы свяжемся с Вами в ближайшее время</Subheader>
      <Form onSubmit={formSubmissionHandler}>
        <InputDiv>
          { nameValueIsInvalid && (<ErrorText>Пожалуйста, введите Ваше имя</ErrorText>) }
          <Input 
            type="text" 
            id="name" 
            placeholder="Имя" 
            onChange={nameValueChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameValue}
          />
        </InputDiv>
        <InputDiv>
          { phoneValueIsInvalid && (<ErrorText>Пожалуйста, введите Ваш номер телефона</ErrorText>) }
          <Input 
            type="tel" 
            id="phone"
            placeholder="Телефон" 
            onChange={phoneValueChangeHandler}
            onBlur={phoneInputBlurHandler}
            value={phoneValue}
          />
        </InputDiv>
        <InputDiv>
          <Textarea 
            name="comment" 
            id="comment" 
            rows="6" 
            placeholder="Комментарий"
            onChange={commentValueChangeHandler}
            value={commentValue}
          />
        </InputDiv>
        <PersonalData>
          <Checkbox type="checkbox" id="data-processing" name="data-processing" required />
          <Label htmlFor="data-processing">
            Отправляя заявку, Вы соглашаетесь на обработку <UnderlinedText>персональных данных</UnderlinedText>
          </Label>
        </PersonalData>
        <Button>Отправить заявку</Button>
      </Form>
    </Container>
  );
};

export default OrderForm;