import styled from "styled-components";

export const Loader = styled.div`
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 240px;
  
  display: flex;
  
  ${Loader} {
    margin: auto;
  }
`;