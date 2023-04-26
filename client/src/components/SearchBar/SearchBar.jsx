import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDogsName } from "../../redux/actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    dispatch(getDogsName(searchValue));
    setSearchValue("");
    history.push("/home");
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel} htmlFor="inputDeBusqueda">
        Buscar un perro:
      </label>
      <input
        className={styles.searchInput}
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}
