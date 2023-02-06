import styled, { keyframes } from "styled-components";

const appearance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  left: calc((100vw - 1300px)/2);
  top: calc((100vh - 940px)/2);
  max-width: 1300px;
  background-color: #fff;
  border-radius: 20px;
  animation: 1s ${appearance} all;
  z-index: 999;
`;