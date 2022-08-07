import Swal from "sweetalert2";
import { fetchWithOutToken } from "../../../helpers/fetch";
import { favoritesGet } from "./favoriteSlice";

export const startFavoritesGet = (type) => {
  return async (dispatch, state) => {
    let user = state().auth.idSpotify;

    const res = await fetchWithOutToken(
      `favorite/?idUser=${user}&type=${type}`,
      {},
      "GET"
    );
    const body = await res.json();
    if (body.ok) {
      console.log(body);

      dispatch(favoritesGet(body.favorites));
    } else {
      Swal.fire("Error", body.message, "error");
    }
  };
};

export const startFavoriteCreate = (favorite) => {
  return async (dispatch) => {
    const res = await fetchWithOutToken(`favorite`, favorite, "POST");
    const body = await res.json();
    if (body.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: body.message,
        showConfirmButton: false,
        timer: 3500,
      });
    } else {
      Swal.fire("Error", body.message, "error");
    }
  };
};
