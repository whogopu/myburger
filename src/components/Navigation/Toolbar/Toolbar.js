import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavtigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../Navigation/SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavtigationItems />
    </nav>
  </header>
);
export default toolbar;
