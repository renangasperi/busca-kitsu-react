import React, { useState, useEffect } from "react";
import styles from "./SearchInput.module.css";
import useDebounce from "../../../../utils/hooks.js";
import { getCharactersByName } from "../../../../services/characters.service";

const SearchInput = ({ handleSearch, pageOffset }) => {
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);

  const searchCharacters = async (name, pageOffset) => {
    return await getCharactersByName(name, pageOffset);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCharacters(debouncedSearchTerm, pageOffset).then((resp) => {
        handleSearch(resp.data, resp.meta.count, resp.links);
      });
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <label htmlFor="search" className={styles.label}>
        Nome do Personagem
      </label>
      <input
        name="search"
        type="text"
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
