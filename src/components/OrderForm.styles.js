import styled from "styled-components";

export const Container = styled.div`
  width: 530px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 20px;
  background: #fff;
  backdrop-filter: blur(25px);

  @media (max-width: 375px) {
    width: 335px;
    padding: 20px;
  }
`;

export const Header = styled.h3`
  font-size: 30px;
  line-height: 34px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 375px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Subheader = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  padding: 20px 15px;
  border: 1px solid #c2c2c2;
  border-radius: 10px;

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
    padding: 15px;
  }
`;

export const Textarea = styled.textarea`
  height: 155px;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  padding: 15px;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  resize: none;

  @media (max-width: 375px) {
    height: 115px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const PersonalData = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  height: 12px;
  width: 12px;
  border: 1px solid #547147;
  accent-color: #547147;
  margin-right: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
`;

export const UnderlinedText = styled.span`
  text-decoration: underline;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 40px;
  border: none;
  background: #547147;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #547900;
    opacity: 0.8;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
    padding: 11px 22px;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: red;
  margin-bottom: 6px;
`;