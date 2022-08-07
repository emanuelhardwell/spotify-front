import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { msToMinutesAndSeconds } from "../../helpers/convertSeconds";
import { startFavoritesGet } from "../../store/slices/favorite/favoriteThunk";
import { Header } from "../header/Header";

export const FavoriteTracks = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(startFavoritesGet("track"));
  }, [dispatch]);

  const handleClick = (id) => {
    console.log("Eliminar track");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="title text-center mb-3">Canciones </h4>
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
                  <th scope="col">Note</th>
                  <th scope="col">Álbum</th>
                  <th scope="col">Lanzamiento</th>
                  <th scope="col">
                    <i className="fa-solid fa-clock"></i>
                  </th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {favorites?.map((track) => (
                  <tr key={track?.info?.id}>
                    <td>
                      <img
                        src={track?.info?.album?.images[2]?.url}
                        className="rounded"
                        alt={track?.info?.name}
                      />
                    </td>
                    <td> {track?.info?.name} </td>
                    <td> {track?.note} </td>
                    <td> {track?.info?.album?.name} </td>
                    <td> {track?.info?.album?.release_date} </td>
                    <td> {msToMinutesAndSeconds(track?.info?.duration_ms)} </td>
                    <td>
                      <i
                        className="fa-solid fa-trash text-danger icono"
                        onClick={() => handleClick(track?.info?.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
