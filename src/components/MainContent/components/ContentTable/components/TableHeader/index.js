import React from "react";
import styles from "./TableHeader.module.css";
import getScreenWidth from "../../../../../../utils/getScreenWidth";

const TableHeader = () => {
  const screenWidth = getScreenWidth();

  return (
    <div className={styles.container}>
      <div className={`${styles.tableItem} ${styles.character}`}>
        Personagem
      </div>
      {screenWidth > 576 && (
        <div className={`${styles.tableItem} ${styles.description}`}>
          Descrição
        </div>
      )}
    </div>
  );
};

export default TableHeader;
