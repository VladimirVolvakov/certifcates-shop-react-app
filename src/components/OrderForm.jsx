// Styles:
import { Button, Checkbox, Container, ErrorText, Form, Header, Input, InputDiv, Label, PersonalData, Subheader, Textarea, UnderlinedText } from "./OrderForm.styles";
// Hook:
import { useEffect, useState } from "react";

const OrderForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(true);

  const [nameValueIsValid, setNameValueIsValid] = useState(false);
  const [phoneValueIsValid, setPhoneValueIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [nameInputWasTouched, setNameInputWasTouched] = useState(false);
  const [phoneInputWasTouched, setPhoneInputWasTouched] = useState(false);

  useEffect(() => {
    if (nameValueIsValid && phoneValueIsValid && checkboxIsChecked) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    };
  }, [checkboxIsChecked, nameValueIsValid, phoneValueIsValid]);

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
  const checkboxValueChangeHandler = () => setCheckboxIsChecked(!checkboxIsChecked);

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
      comment: commentValue,
      checkbox: checkboxIsChecked
    });

    setNameValue("");
    setPhoneValue("");
    setCommentValue("");
    setCheckboxIsChecked(true);
  };

  const nameValueIsInvalid = !nameValueIsValid && nameInputWasTouched;
  const phoneValueIsInvalid = !phoneValueIsValid && phoneInputWasTouched;

  return (
    <Container>
      <Header>?????????????????? ????????????</Header>
      <Subheader>???? ???????????????? ?? ???????? ?? ?????????????????? ??????????</Subheader>
      <Form onSubmit={formSubmissionHandler}>
        <InputDiv>
          { nameValueIsInvalid && (<ErrorText>????????????????????, ?????????????? ???????? ??????</ErrorText>) }
          <Input 
            type="text" 
            id="name" 
            placeholder="??????" 
            onChange={nameValueChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameValue}
          />
        </InputDiv>
        <InputDiv>
          { phoneValueIsInvalid && (<ErrorText>????????????????????, ?????????????? ?????? ?????????? ????????????????</ErrorText>) }
          <Input 
            type="tel" 
            id="phone"
            placeholder="??????????????" 
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
            placeholder="??????????????????????"
            onChange={commentValueChangeHandler}
            value={commentValue}
          />
        </InputDiv>
        <InputDiv>
          { !checkboxIsChecked && (<ErrorText>????????????????????, ?????????? ???????????????????? ???? ?????????????????? ?????????? ????????????</ErrorText>) }
          <PersonalData>
            <Checkbox 
              type="checkbox" 
              id="data-processing" 
              name="data-processing" 
              checked={checkboxIsChecked}
              onChange={checkboxValueChangeHandler}
              required 
            />
            <Label htmlFor="data-processing">
              ?????????????????? ????????????, ???? ???????????????????????? ???? ?????????????????? <UnderlinedText>???????????????????????? ????????????</UnderlinedText>
            </Label>
          </PersonalData>
        </InputDiv>
        <Button disabled={!formIsValid}>?????????????????? ????????????</Button>
      </Form>
    </Container>
  );
};

export default OrderForm;