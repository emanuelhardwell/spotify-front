import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startSearchsGet } from "../../store/slices/search/searchThunk";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startSearchsGet(search));
  };

  return (
    <>
      <form onSubmit={onSubmit} className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Buscar
          </button>
        </div>
      </form>
    </>
  );
};
