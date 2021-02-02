import styled from "styled-components";
import {IconButton} from "@material-ui/core";

export const MenuButton = styled(IconButton)`
  margin-right: 8px;
`

export const Search = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: fade(white, 0.15);
  :hover & {
    background-color: fade(white, 0.25);
  }
  margin-left: 0;
  width: 100%;
`;

export const SearchIcon = styled.div`
      padding: 8px;
      height: 100%;
      position: absolute;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
`;