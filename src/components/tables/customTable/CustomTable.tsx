import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Itable as Props, complex } from "../../../interfaces/Itable";

import Card from "../../UI/card/Card";
import Badge from "../../UI/badge/Badge";
import { FaEllipsisV, FaStar } from "react-icons/fa";

import { images } from "../../../constants";

import classes from "./CustomTable.module.scss";

const CustomTable: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);

  const handlePinClick = async (id: number, index: number) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ position: index }),
      });
      // Handle response as needed
      if (props.reloadOnPinClick) {
        props.reloadData(); // Yeniden veri yükleme işlemi
      }
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  function tableBody(item: complex, index: number) {
    if ("email" in item) {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td className={classes.userName}>
            <img className={classes.avatar} src={images.customer} alt="" />
            {item.name}
          </td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
        </tr>
      );
    } else if ("name" in item) {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td className={classes.product_name}>
            <img className={classes.product_img} src={images.product} alt="" />
            {item.name}
          </td>
          <td>{item.sku}</td>
          <td>{item.stock}</td>
          <td>${item.price}</td>
          <td className={classes.actions}>
            <FaEllipsisV />
            <div className={classes.actions__box}>
              <div
                className={classes.actions__pin}
                onClick={() => handlePinClick(item.id, index)}
              >
                <FaStar size={24} />
              </div>
            </div>
          </td>
        </tr>
      );
    } else if ("username" in item) {
      return (
        <tr key={index}>
          <td>{item.username}</td>
          <td>{item.order}</td>
          <td>{item.price}</td>
        </tr>
      );
    } else if ("orderId" in item) {
      return (
        <tr key={index}>
          <td>{item.orderId}</td>
          <td>{item.customer}</td>
          <td>{item.totalPrice}</td>
          <td>{item.date}</td>
          <td>
            <Badge content={item.status} />
          </td>
        </tr>
      );
    }
  }

  const initDataShow = () => {
    return props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;
  };

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range: number[] = [];

  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page: number) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setDataShow(props.bodyData?.slice(start, end));

    setCurrPage(page);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={classes.container}>
        <Card>
          <div className={classes.wrapper}>
            <div className={classes.table__wrapper}>
              <table
                className={props.limit ? classes.largeTable : classes.table}
              >
                {props.headData ? (
                  <thead>
                    <tr>
                      {props.headData.map((item, index) => (
                        <th key={index}>{t(item)}</th>
                      ))}
                    </tr>
                  </thead>
                ) : null}
                <tbody>
                  {dataShow.map((item, index) => tableBody(item, index))}
                </tbody>
              </table>
            </div>
            {pages > 1 ? (
              <div className={classes.table__pagination}>
                {range.map((item, index) => (
                  <div
                    key={index}
                    className={`${classes.table__pagination_item} ${
                      currPage === index ? classes.active : ""
                    }`}
                    onClick={() => selectPage(index)}
                  >
                    {item + 1}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </>
  );
};

export default CustomTable;
