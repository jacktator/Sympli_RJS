import styled, {css} from "styled-components";
import {Button, Card} from "@material-ui/core";

export const PersonCardWrapper = styled(Card)`
  min-width: 275px;
`;
interface AnimatinoProp {
  shouldAnimate: boolean;
}
export const ViewButton = styled(Button)<AnimatinoProp>`

  ${({ shouldAnimate }) =>
  shouldAnimate &&
  css`
      animation: bounce 2s 5;
    `}

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;