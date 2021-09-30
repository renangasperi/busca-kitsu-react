import React from "react";
import getScreenWidth from "../../../../../../utils/getScreenWidth";
import styles from "./TableData.module.css";

const TableData = ({ characters, openModal }) => {
  const screenWidth = getScreenWidth();

  function handleOpenModal(relationships) {
    openModal(relationships)
  }
  return characters.map(({ id, attributes: { name, description, image }, relationships }) => (
    <div key={id} className={styles.tableItem} onClick={() => handleOpenModal(relationships)}>
      <div className={styles.character}>
        <img
          src={image ? image.original : ""}
          alt={`Imagem do personagem ${name}`}
          className={styles.image}
        />
        <div title={name} className={styles.name}>
          {name}
        </div>
      </div>
      {screenWidth > 576 && (
        <div className={styles.description}>
          <p className={styles.text}>{description}</p>
        </div>
      )}
    </div>
  ));
};

export default TableData;
