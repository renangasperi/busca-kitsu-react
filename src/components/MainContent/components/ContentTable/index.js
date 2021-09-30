import React, { useState } from "react";
import { getMedia } from "../../../../services/characters.service";
import ParticipationModal from "./components/ParticipationModal";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import TablePagination from "./components/TablePagination";
import styles from "./ContentTable.module.css";

const ContentTable = ({
  characters,
  totalPages,
  actualPage,
  handleChangePage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  async function handleOpenModal(characterRelationship) {
    const url = characterRelationship.mediaCharacters.links.related;
    const participations = [];
    await getMedia(url).then(async (mediaArray) => {
      await Promise.all(
        mediaArray.data.map(async (media) => {
          const link = media.relationships.media.links.related;
          const resp = await getMedia(link);
          const item = {
            name: resp.data.attributes.canonicalTitle,
            picture: resp.data.attributes.posterImage.small,
            id: resp.data.id,
          };
          participations.push(item);
        })
      );
    });
    setModalData(participations);
    setShowModal(true);
  }

  return (
    <div className={styles.container}>
      <TableHeader></TableHeader>
      <TableData
        characters={characters}
        openModal={(characterRelationship) =>
          handleOpenModal(characterRelationship)
        }
      ></TableData>
      <TablePagination
        totalPages={totalPages}
        actualPage={actualPage}
        handleChangePage={(page) => handleChangePage(page)}
      ></TablePagination>
      {showModal && (
        <ParticipationModal
          modalData={modalData}
          closeModal={() => setShowModal(false)}
        ></ParticipationModal>
      )}
    </div>
  );
};

export default ContentTable;
