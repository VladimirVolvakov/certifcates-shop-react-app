import styled from "styled-components";

export const AccordionItm = styled.div`
  border-bottom: 2px solid #eaebef;
`;

export const AccordionHeader = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 375px) {
    padding: 15px 0;
  }
`;

export const AccordionBody = styled.div``;

export const Question = styled.h3`
  font-size: 30px;
  line-height: 37px;
  font-weight: 600;
  color: #333;

  @media (max-width: 375px) {
    width: 266px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Toggler = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #e8e8e8;
    background: #333;
  }

  @media (max-width: 375px) {
    height: 40px;
    width: 40px;
    font-size: 24px;
  }
`;

export const Answer = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #333;
  margin-bottom: 25px;

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 15px;
  }
`;