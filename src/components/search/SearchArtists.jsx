import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteActive,
  favoriteModalOpen,
} from "../../store/slices/favorite/favoriteSlice";

export const SearchArtists = ({ artists }) => {
  const { idSpotify } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = (id, type, data, idSpotify) => {
    const favorite = {
      idUser: idSpotify,
      idFavorite: id,
      type: type,
      info: data,
    };

    dispatch(favoriteActive(favorite));
    dispatch(favoriteModalOpen());
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h4 className="title text-center mb-3">Artistas</h4>
        </div>
      </div>

      <div className="row mb-3">
        {artists?.items?.map((artist) => (
          <div
            key={artist?.id}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div className="card h-100">
              <img
                src={artist?.images[1]?.url}
                className="card-img-top"
                alt={artist?.name}
              />
              <div className="card-body">
                <i className="fa-solid fa-user d-inline pe-2"></i>
                <h5 className="card-title d-inline pe-3">{artist.name}</h5>
                <i
                  className="fa-solid fa-heart text-danger"
                  onClick={() =>
                    handleClick(artist?.id, artist?.type, artist, idSpotify)
                  }
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
