import React from "react";

export const ArtistsRandom = ({ artists }) => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <h3 className="text-center mb-3">Artistas</h3>
        </div>
      </div>

      <div className="row">
        {artists?.map((artist) => (
          <div
            key={artist?.id}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div className="card h-100">
              <img
                src={artist?.album?.images[1]?.url}
                className="card-img-top"
                alt={artist?.name}
              />
              <div className="card-body">
                <i className="fa-solid fa-user d-inline pe-2"></i>
                <h5 className="card-title d-inline">
                  {artist?.artists[0]?.name}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
