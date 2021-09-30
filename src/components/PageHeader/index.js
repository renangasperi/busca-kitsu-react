import React from "react";
import styles from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}><strong>Busca Kitsu</strong> Teste Front-End</h1>
      <span className={styles.creator}>Renan Gasperi</span>
    </header>
  );
};

export default PageHeader;
