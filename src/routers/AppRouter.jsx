import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Confirm } from "../components/auth/Confirm";
import { Login } from "../components/auth/Login";
import { FavoriteArtists } from "../components/favorite/FavoriteArtists";
import { FavoriteTracks } from "../components/favorite/FavoriteTracks";
import { Home } from "../components/home/Home";
import { Search } from "../components/search/Search";
import { startRenewToken } from "../store/slices/auth/authThunk";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startRenewToken());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRouter isAuthenticated={!!id}>
                  <Login />
                </PublicRouter>
              }
            />

            <Route
              path="/confirm"
              element={
                <PublicRouter isAuthenticated={!!id}>
                  <Confirm />
                </PublicRouter>
              }
            />

            <Route
              path="/"
              element={
                <PrivateRouter isAuthenticated={!!id}>
                  <Home />
                </PrivateRouter>
              }
            />

            <Route
              path="/search"
              element={
                <PrivateRouter isAuthenticated={!!id}>
                  <Search />
                </PrivateRouter>
              }
            />

            <Route
              path="/favoritetracks"
              element={
                <PrivateRouter isAuthenticated={!!id}>
                  <FavoriteTracks />
                </PrivateRouter>
              }
            />

            <Route
              path="/favoriteartists"
              element={
                <PrivateRouter isAuthenticated={!!id}>
                  <FavoriteArtists />
                </PrivateRouter>
              }
            />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
