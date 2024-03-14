import React from "react";
import { useTranslation } from "react-i18next";

import { ICustomersTable } from "../interfaces/Itable";
import useFetch from "../hook/useFetch";
import CustomTable from "../components/tables/customTable/CustomTable";
import LoadingSpinner from "../components/UI/loadingSpinner/LoadingSpinner";
import { customersHeader } from "../constants/tables";

const url = "http://localhost:5000/customers";

function Customers() {
  const { t } = useTranslation();

  const { data, status } = useFetch<ICustomersTable[]>(url);

  let customersTable;

  if (status === "loading") {
    customersTable = <LoadingSpinner />;
  }

  if (status === "fetched" && data) {
    customersTable = (
      <CustomTable limit={10} headData={customersHeader} bodyData={data} />
    );
  }

  return (
    <section>
      <h2 className="title">{t("customers")}</h2>

      {customersTable}
    </section>
  );
}

export default Customers;
