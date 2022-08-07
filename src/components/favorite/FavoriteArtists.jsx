import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFavoritesGet } from "../../store/slices/favorite/favoriteThunk";
import { Header } from "../header/Header";

export const FavoriteArtists = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(startFavoritesGet("artist"));
  }, [dispatch]);

  const handleClick = (id) => {
    console.log("Eliminar artist");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="title text-center mb-3">Artistas</h4>
          </div>
        </div>

        <div className="row mb-3">
          {favorites?.map((artist) => (
            <div
              key={artist?.info?.id}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <div className="card h-100">
                <img
                  src={artist?.info?.images[1]?.url}
                  className="card-img-top"
                  alt={artist?.info?.name}
                />
                <div className="card-body">
                  <i className="fa-solid fa-user d-inline pe-2"></i>
                  <h5 className="card-title d-inline pe-3">
                    {artist?.info?.name}
                  </h5>
                  <i
                    className="fa-solid fa-heart text-danger"
                    onClick={() => handleClick(artist?.info?.id)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
