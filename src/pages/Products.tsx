import React from "react";
import { useTranslation } from "react-i18next";

import { IProductsTable } from "../interfaces/Itable";
import useFetch from "../hook/useFetch";
import CustomTable from "../components/tables/customTable/CustomTable";
import LoadingSpinner from "../components/UI/loadingSpinner/LoadingSpinner";
import { productsHeader } from "../constants/tables";

const url = "http://localhost:5000/products";

function Products() {
  const { t } = useTranslation();

  const { data, status } = useFetch<IProductsTable[]>(url);

  let productsTable;

  if (status === "loading") {
    productsTable = <LoadingSpinner />;
  }

  if (status === "fetched" && data) {
    productsTable = (
      <CustomTable limit={10} headData={productsHeader} bodyData={data} />
    );
  }

  return (
    <section>
      <h2 className="title">{t("products")}</h2>

      {productsTable}
    </section>
  );
}

export default Products;
