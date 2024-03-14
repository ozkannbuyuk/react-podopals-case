import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaDollarSign,
  FaClipboardList,
  FaShoppingBasket,
} from "react-icons/fa";
import Card from "../UI/card/Card";
import { IsummData } from "../../interfaces/IsummData";

import classes from "./Summary.module.scss";

const iconComponents = {
  FaShoppingBasket: FaShoppingBasket,
  FaClipboardList: FaClipboardList,
  FaDollarSign: FaDollarSign,
};

const summaryData: IsummData[] = [
  {
    icon: "FaShoppingBasket",
    text: "thisMonthSales",
    amount: "salesAmount",
  },
  {
    icon: "FaClipboardList",
    text: "thisMonthOrders",
    amount: "orderAmount",
  },
  {
    icon: "FaDollarSign",
    text: "thisMonthRevenue",
    amount: "revenueAmount",
  },
];

function Summary() {
  const { t } = useTranslation();

  return (
    <section className={classes.summary}>
      <div className={classes.summary__box}>
        {summaryData.map((item, index) => (
          <div key={index} className={classes.summary__box}>
            <Card>
              <div className={classes.summary__box__wrapper}>
                <div className={classes.summary__box__icon}>
                  {React.createElement(iconComponents[item.icon], { size: 48 })}
                </div>
                <div className={classes.summary__box__info}>
                  <p>{t(item.text)}</p>
                  <div className={classes.summary__box__info__amount}>
                    <h4>{t(item.amount)}</h4>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Summary;
