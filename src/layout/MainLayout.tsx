import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

import SidebarContext from "../store/sidebarContext";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  const sidebarCtx = useContext(SidebarContext);

  useEffect(() => {
    if (document.body.classList.contains("sidebar__open"))
      document.body.classList.remove("sidebar__open");
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <div
          className={`${styles.main__content} ${
            !sidebarCtx.isOpen ? styles.close_sidebar : ""
          } main_wrapper`}
        >
          <TopNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
