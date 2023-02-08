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
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: fixed;
  left: calc((100vw - 1360px)/2);
  top: 20px;
  bottom: 20px;
  height: calc(100vh - 40px);
  overflow-x: hidden;
  overflow-y: scroll;
  max-width: 1300px;
  background-color: #fff;
  border-radius: 20px;
  animation: 1s ${appearance} all;
  z-index: 999;

  &::-webkit-scrollbar {
    width: 1em;
  }
   
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 0 20px 20px 0;
  }
   
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 0 20px 20px 0;
  }
`;