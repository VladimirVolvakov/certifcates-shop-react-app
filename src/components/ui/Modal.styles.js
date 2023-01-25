import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
`;