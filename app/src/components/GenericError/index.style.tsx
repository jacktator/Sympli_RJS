import styled from "styled-components";

export const GenericErrorWrapper = styled.div`
  width: 100%;
  text-align: center;
  
  background-color: black;
  color: white;
`;

export const ErrorMessage = styled.span`
  animation: blinker 1s linear infinite;
  
  @keyframes blinker {
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;