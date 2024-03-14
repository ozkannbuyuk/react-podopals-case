import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";
import { useTranslation } from "react-i18next";

import { images } from "../../constants";

import SidebarContext from "../../store/sidebarContext";
import LoginContext from "../../store/loginContext";
import ThemeContext from "../../store/themeContext";

import classes from "./Sidebar.module.scss";

import {
  FaThLarge,
  FaBoxes,
  FaUserFriends,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Sidebar() {
  const sidebarNav = [
    {
      link: "/",
      section: "dashboard",
      icon: FaThLarge,
      text: "Dashboard",
    },
    {
      link: "/products",
      section: "products",
      icon: FaBoxes,
      text: "Products",
    },
    {
      link: "/customers",
      section: "customers",
      icon: FaUserFriends,
      text: "Customers",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();
  const location = useLocation();
  const sidebarCtx = useContext(SidebarContext);
  const loginCtx = useContext(LoginContext);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  function openSidebarHandler() {
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  function logoutHandler() {
    openSidebarHandler();
    loginCtx.toggleLogin();
  }

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div
      className={`${classes.sidebar} ${
        !sidebarCtx.isOpen && classes.sidebar_close
      }`}
    >
      <div
        className={`${classes.sidebar__logo} ${
          !sidebarCtx.isOpen && classes.hideLogo
        }`}
      >
        {theme === "light" ? (
          <img src={images.lightLogo} alt="podopals" />
        ) : (
          <img src={images.darkLogo} alt="podopals" />
        )}
      </div>
      <div className={classes.sidebar__menu}>
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`${classes.sidebar__menu__item} ${
              activeIndex === index && classes.active
            }`}
            onClick={openSidebarHandler}
          >
            <div className={classes.sidebar__menu__item__icon}>
              <nav.icon />
            </div>
            <div className={classes.sidebar__menu__item__txt}>
              {t(nav.section)}
            </div>
          </Link>
        ))}
      </div>

      <div className={[classes.sidebar__menu, classes.logout].join("")}>
        <Link
          to="/login"
          className={classes.sidebar__menu__item}
          onClick={logoutHandler}
        >
          <div className={classes.sidebar__menu__item__icon}>
            <FaExternalLinkAlt />
          </div>
          <div className={classes.sidebar__menu__item__txt}>{t("logout")}</div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
