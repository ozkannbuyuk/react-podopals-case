import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LoginContext from "../../store/loginContext";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

import classes from "./Login.module.scss";

function LoginBox() {
  const loginCtx = useContext(LoginContext);
  const userNameRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  let isValid = true;

  function loginHandler(e: React.FormEvent) {
    e.preventDefault();
    isValid = userNameRef.current?.value === "admin";

    if (userNameRef.current) {
      if (isValid) {
        loginCtx.toggleLogin();
        navigate("/");
      } else {
        userNameRef.current.focus();
        errorMessageRef.current?.setAttribute(
          "style",
          "display: inline-block;opacity: 1"
        );
      }
    }
  }

  return (
    <div className={`${classes.container}`}>
      <div className={classes.loginBox}>
        <form onSubmit={loginHandler}>
          <Input
            ref={userNameRef}
            type={"text"}
            id={"userName"}
            placeholder={"admin"}
          />
          <span ref={errorMessageRef} className={classes.errorMessage}>
            {t("errorMessage")}
          </span>
          <Input
            type={"password"}
            id={"pass"}
            value={"admin"}
            readonly={true}
          />
          <Button type="submit">{t("login")}</Button>
          <Link className={classes.forgat_pass} to="/">
            {t("forgetPass")}
          </Link>
        </form>
      </div>

      <div className={classes.keyPic}>
        <img
          src={require("../../assets/images/revenue-cuate.svg").default}
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginBox;
