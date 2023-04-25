import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDogsName } from "../../redux/actions";

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
    <div>
      <label htmlFor="inputDeBusqueda">Buscar un perro:</label>
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
