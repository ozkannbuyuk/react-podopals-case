import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../components/UI/button/Button";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className={"notFound__container"}>
      <h2 className={"notFound__title"}>{t("notFoundMsg")}</h2>
      <Link to="/">
        <Button>{t("backToHome")}</Button>
      </Link>
      <div className="notFound__img">
        <img
          src={require("../assets/images/not-found.svg").default}
          alt="404 Page"
        />
      </div>
    </div>
  );
}

export default NotFound;
