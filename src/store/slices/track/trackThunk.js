import Swal from "sweetalert2";
import { fetchWithTokenSpotify } from "../../../helpers/fetch";
import { generarRandomLetter } from "../../../helpers/generateRandom";
import { tracksGet } from "./trackSlice";

export const startTracksGet = () => {
  return async (dispatch) => {
    let palabra = generarRandomLetter(3);
    const res = await fetchWithTokenSpotify(
      `search?type=track&q=%25${palabra}%25&limit=9`,
      {},
      "GET"
    );

    if (res.ok) {
      const body = await res.json();
      dispatch(tracksGet(body.tracks.items));
    } else {
      Swal.fire("Error", "Error al mostar tracks", "error");
    }
  };
};
