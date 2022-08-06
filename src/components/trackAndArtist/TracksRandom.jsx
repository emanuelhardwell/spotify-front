import React from "react";
import { msToMinutesAndSeconds } from "../../helpers/convertSeconds";

export const TracksRandom = ({ tracks }) => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <h3 className="text-center mb-3">Canciones</h3>
        </div>
      </div>

      <div className="row mb-3">
        {tracks?.map((track) => (
          <div
            key={track?.id}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div className="card h-100">
              <img
                src={track?.album?.images[1]?.url}
                className="card-img-top"
                alt={track?.name}
              />
              <div className="card-body">
                <h5 className="card-title"> {track?.name} </h5>
                <p className="card-subtitle mb-2">{track?.artists[0]?.name}</p>
                <p className="mb-0 d-inline pe-3">
                  {track?.duration_ms &&
                    msToMinutesAndSeconds(track?.duration_ms)}
                </p>
                <i className="fa-solid fa-clock pe-5"></i>
                <div className="text-center">
                  <i className="fa-solid fa-circle-play fa-3x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
