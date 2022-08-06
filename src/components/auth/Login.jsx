import React from "react";

const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
const SCOPE = process.env.REACT_APP_SCOPE;

const urlSpotify = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}`;

export const Login = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row my-5">
          <div className="col-sm-12">
            <div className="card mx-auto" style={{ width: 20 + "em" }}>
              <div className="card-body">
                <h5 className="card-title mb-4">Login</h5>
                <a href={urlSpotify} className="btn btn-success mb-3">
                  Login with spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
