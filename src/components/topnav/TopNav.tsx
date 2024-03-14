import React, { useContext } from "react";

import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { useWindowSize } from "usehooks-ts";
import TopNavRightBox from "./rightBox/TopNavRightBox";
import SidebarContext from "../../store/sidebarContext";

import classes from "./TopNav.module.scss";

function TopNav() {
  const sideOpenCtx = useContext(SidebarContext);
  const { width } = useWindowSize();

  function openSidebarHandler() {
    sideOpenCtx.toggleSidebar();
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  return (
    <div className={classes.topNav}>
      <div className={classes.topNav_left}>
        <div
          className={classes.topNav_left_menu_icon}
          onClick={openSidebarHandler}
        >
          <RiMenu2Line size="24" />
        </div>
        <div className={classes.topNav_left_menu} onClick={openSidebarHandler}>
          <div className="topNav_left_menu_open">
            <RiMenu2Line size="24" />
          </div>

          <div className="topNav_left_menu_close">
            <MdOutlineCancel size="24" />
          </div>
        </div>
      </div>

      <TopNavRightBox />
    </div>
  );
}

export default TopNav;
