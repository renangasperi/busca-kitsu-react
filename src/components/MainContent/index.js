import React, { useState, useEffect } from "react";
import { getCharacters } from "../../services/characters.service";
import ContentTable from "./components/ContentTable";
import SearchInput from "./components/SearchInput";

import styles from "./MainContent.module.css";

const MainContent = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const charactersPerPage = 10;

  function totalPagesByTotalCharacters(totalCharacters) {
    return totalCharacters / charactersPerPage;
  }

  function changeStates(data, totalCharacters) {
    setCharacters(data);
    setTotalPages(totalPagesByTotalCharacters(totalCharacters));
  }

  async function getCharactersData(offset) {
    const charactersData = await getCharacters(offset);

    changeStates(
      charactersData.data,
      totalPagesByTotalCharacters(charactersData.meta.count)
    );
  }

  function getPageOffset(page) {
    return (page - 1) * 10;
  }

  function onSearchResult(data, totalCharacters) {
    changeStates(data, totalCharacters);
  }

  useEffect(() => {
    getCharactersData(getPageOffset(page));
  }, [page]);

  return (
    <main className={styles.main}>
      <SearchInput
        handleSearch={(data, totalCharacters) =>
          onSearchResult(data, totalCharacters)
        }
      ></SearchInput>

      <ContentTable
        characters={characters}
        totalPages={totalPages}
        actualPage={page}
        handleChangePage={(page) => setPage(page)}
      ></ContentTable>
    </main>
  );
};

export default MainContent;
