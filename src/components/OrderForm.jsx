// Styles:
import { Button, Checkbox, Container, Form, Header, Input, Label, PersonalData, Subheader, UnderlinedText } from "./OrderForm.styles";

const OrderForm = () => {
  return (
    <Container>
      <Header>Отправьте заявку</Header>
      <Subheader>Мы свяжемся с Вами в ближайшее время</Subheader>
      <Form>
        <Input type="text" placeholder="Имя" />
        <Input type="text" placeholder="Телефон" />
        <Input type="text" placeholder="Комментарий" />
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