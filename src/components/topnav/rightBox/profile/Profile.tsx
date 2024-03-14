import React from "react";
import { useTranslation } from "react-i18next";

import { images } from "../../../../constants";
import classes from "./Profile.module.scss";

function Profile() {
  const { t } = useTranslation();

  return (
    <div className={classes.profile}>
      <div className={classes.profile__avatar}>
        <img src={images.pp} alt="" />
      </div>
      <div className={classes.profile__info}>
        <p className={classes.profile__userName}>{t("ozkanBuyuk")}</p>
      </div>
    </div>
  );
}

export default Profile;
