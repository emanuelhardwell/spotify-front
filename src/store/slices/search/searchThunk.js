import Swal from "sweetalert2";
import { fetchWithTokenSpotify } from "../../../helpers/fetch";

import { searchsGet } from "./searchSlice";

export const startSearchsGet = (keyword) => {
  return async (dispatch) => {
    const res = await fetchWithTokenSpotify(
      `search?type=track,artist&q=%25${keyword}%25&limit=20`,
      {},
      "GET"
    );

    if (res.ok) {
      const body = await res.json();

      dispatch(searchsGet({ artists: body.artists, tracks: body.tracks }));
    } else {
      Swal.fire("Error", "Error en la busqueda", "error");
    }
  };
};
