import Swal from "sweetalert2";
import {
  fetchWithOutToken,
  fetchWithTokenSpotify,
} from "../../../helpers/fetch";
import {
  authCheckingFinish,
  authGetInfo,
  authLogin,
  authLogout,
} from "./authSlice";

export const startLogin = (token) => {
  return async (dispatch) => {
    const res = await fetchWithOutToken("auth/login", token, "POST");
    const body = await res.json();
    if (body.ok) {
      localStorage.setItem("token", body.accessToken);
      localStorage.setItem("refreshToken", body.refreshToken);

      dispatch(authLogin({ id: body.accessToken, idExtra: body.accessToken }));
      dispatch(startGetInformation());
    } else {
      Swal.fire("Error", body.message, "error");
    }
  };
};

export const startRenewToken = () => {
  return async (dispatch) => {
    const refreshToken = localStorage.getItem("refreshToken");

    const res = await fetchWithOutToken(
      "auth/refresh",
      { refreshToken },
      "POST"
    );
    const body = await res.json();

    if (body.ok) {
      localStorage.setItem("token", body.accessToken);

      dispatch(authLogin({ id: body.accessToken }));
      dispatch(startGetInformation());
    } else {
      dispatch(authCheckingFinish());
    }
  };
};

export const startGetInformation = () => {
  return async (dispatch) => {
    const res = await fetchWithTokenSpotify("me", {}, "GET");

    if (res.ok) {
      const body = await res.json();
      dispatch(authGetInfo({ name: body.display_name, idSpotify: body.id }));
    } else {
      console.log("Error al recuperar datos de la cuenta");
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(authLogout());

    // dispatch(productLogout());
    // dispatch(categoryLogout());
  };
};
