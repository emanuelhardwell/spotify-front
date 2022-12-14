import React from "react";
import { msToMinutesAndSeconds } from "../../helpers/convertSeconds";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteActive,
  favoriteModalOpen,
} from "../../store/slices/favorite/favoriteSlice";

export const SearchTracks = ({ tracks }) => {
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
          <h4 className="title text-center mb-3">Canciones</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col">
                  <i className="fa-solid fa-image"></i>
                </th>
                <th scope="col">Título</th>
                <th scope="col">Artista</th>
                <th scope="col">Álbum</th>
                <th scope="col">Lanzamiento</th>
                <th scope="col">
                  <i className="fa-solid fa-clock"></i>
                </th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {tracks?.items?.map((track) => (
                <tr key={track?.id}>
                  <td>
                    <img
                      src={track?.album?.images[2]?.url}
                      className="rounded"
                      alt={track?.name}
                    />
                  </td>
                  <td> {track?.name} </td>
                  <td> {track?.artists[0]?.name} </td>
                  <td> {track?.album?.name} </td>
                  <td> {track?.album?.release_date} </td>
                  <td> {msToMinutesAndSeconds(track?.duration_ms)} </td>
                  <td>
                    <i
                      className="fa-solid fa-heart text-danger icono"
                      onClick={() =>
                        handleClick(track?.id, track?.type, track, idSpotify)
                      }
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
