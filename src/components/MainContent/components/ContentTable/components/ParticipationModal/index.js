import React from "react";
import styles from "./ParticipationModal.module.css";

const ParticipationModal = ({ modalData, closeModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>Participações</div>
          <button className={styles.close} onClick={closeModal}>
            Fechar
          </button>
        </div>
        <div className={styles.content}>
          {modalData.map((participation) => (
            <div key={participation.id} className={styles.participation}>
              <div className={styles.participationName}>
                {participation.name}
              </div>
              <img
                src={participation.picture}
                alt={participation.name}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipationModal;
