import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../header/Header";
import { FormModal } from "./FormModal";
import { SearchArtists } from "./SearchArtists";
import { SearchForm } from "./SearchForm";
import { SearchTracks } from "./SearchTracks";

export const Search = () => {
  const { artists, tracks } = useSelector((state) => state.search);

  return (
    <>
      <Header />
      <div className="container my-4">
        <SearchForm />
        <SearchArtists artists={artists} />
        <SearchTracks tracks={tracks} />
        <FormModal />
      </div>
    </>
  );
};
