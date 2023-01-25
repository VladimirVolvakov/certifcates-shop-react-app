// Styles:
import { Button, Checkbox, Container, Form, Header, Input, Label, PersonalData, Subheader, Textarea, UnderlinedText } from "./OrderForm.styles";

const OrderForm = () => {
  return (
    <Container>
      <Header>Отправьте заявку</Header>
      <Subheader>Мы свяжемся с Вами в ближайшее время</Subheader>
      <Form>
        <Input type="text" id="name" placeholder="Имя" />
        <Input type="tel" id="phone" placeholder="Телефон" />
        <Textarea name="comment" id="comment" rows="6" placeholder="Комментарий" />
        <PersonalData>
          <Checkbox type="checkbox" id="data-processing" name="data-processing" />
          <Label for="data-processing">
            Отправляя заявку, Вы соглашаетесь на обработку <UnderlinedText>персональных данных</UnderlinedText>
          </Label>
        </PersonalData>
        <Button type="submit">Отправить заявку</Button>
      </Form>
    </Container>
  );
};

export default OrderForm;