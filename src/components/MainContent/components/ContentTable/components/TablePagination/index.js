import React, { useState, useEffect } from "react";
import styles from "./TablePagination.module.css";
import getScreenWidth from "../../../../../../utils/getScreenWidth";
import LeftArrow from "../../../../../../assets/left-arrow.svg";
import RightArrow from "../../../../../../assets/right-arrow.svg";

const TablePagination = ({ totalPages, actualPage, handleChangePage }) => {
  const [pages, setPages] = useState([]);
  const screenWidth = getScreenWidth();

  function getPageList(actualPageToGenerateList) {
    const pageList = [];
    const quantityToGenerate =
      screenWidth < 576 ? actualPage + 2 : actualPage + 5;

    for (
      let index = actualPageToGenerateList;
      index <= quantityToGenerate;
      index++
    ) {
      pageList.push(index);
    }

    return pageList;
  }
  useEffect(() => {
    if (!pages.includes(actualPage) || actualPage > pages[pages.length - 1] - 1 || actualPage === 1) {
      setPages(getPageList(actualPage));
    }
  }, [actualPage]);

  return (
    <div className={styles.container}>
      <img
        src={LeftArrow}
        className={`${styles.arrow} ${
          actualPage === 1 ? styles.arrowDisabled : ""
        }`}
        alt="seta para a esquerda"
        onClick={() => handleChangePage(actualPage - 1)}
      />

      <ul className={styles.pagesList}>
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => handleChangePage(page)}
            className={`${styles.pagesItem} ${
              actualPage === page ? styles.actualPage : ""
            }`}
          >
            {page}
          </li>
        ))}
      </ul>

      <img
        src={RightArrow}
        className={styles.arrow}
        alt="seta para a direita"
        onClick={() => handleChangePage(actualPage + 1)}
      />
    </div>
  );
};

export default TablePagination;
