import {AppBar, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import React from "react";
import {MenuButton} from "./index.style";

export interface NavbarProps {
}

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </MenuButton>
        <Typography variant="h6" noWrap>
          Star Wars
        </Typography>
        {/*<Search>*/}
        {/*  <SearchIcon>*/}
        {/*    <SearchIcon />*/}
        {/*  </SearchIcon>*/}
        {/*  <InputBase*/}
        {/*    placeholder="Search…"*/}
        {/*    inputProps={{ 'aria-label': 'search' }}*/}
        {/*  />*/}
        {/*</Search>*/}
      </Toolbar>
    </AppBar>
  )
}