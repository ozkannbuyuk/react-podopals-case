import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { useTranslation } from "react-i18next";

import BarChart from "./BarChart";

import classes from "./Chart.module.scss";
import data from "../../constants/data";
import Card from "../UI/card/Card";

const SaleChart = () => {
  const { t } = useTranslation();

  const labels = data.revenueByMonths.labels.map((month) => t(month));

  const [orderData] = useState({
    labels,
    datasets: [
      {
        label: t("summaryOfOrders"),
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#FC2C01",
      },
    ],
  });

  const [revenueData] = useState({
    labels,
    datasets: [
      {
        label: t("summaryOfRevenue"),
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#FC2C01",
      },
    ],
  });

  return (
    <section className={classes.chart}>
      <p className="subTitle">{t("quickAnalysis")}</p>
      <div className={classes.charts__container}>
        <div className={classes.charts__wrapper}>
          <Card>
            <div className={classes.chart__wrapper}>
              <BarChart
                chartData={orderData}
                chartTitle={`${t("summaryOfOrders")}`}
              />
            </div>
          </Card>
          <Card>
            <div className={classes.chart__wrapper}>
              <BarChart
                chartData={revenueData}
                chartTitle={`${t("summaryOfRevenue")}`}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SaleChart;
