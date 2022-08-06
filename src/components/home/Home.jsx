import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startArtistsGet } from "../../store/slices/artist/artistThunk";
import { startTracksGet } from "../../store/slices/track/trackThunk";
import { Header } from "../header/Header";
import { ArtistsRandom } from "../trackAndArtist/ArtistsRandom";
import { TracksRandom } from "../trackAndArtist/TracksRandom";

export const Home = () => {
  const dispatch = useDispatch();
  const { tracks } = useSelector((state) => state.track);
  const { artists } = useSelector((state) => state.artist);

  useEffect(() => {
    dispatch(startTracksGet());
    dispatch(startArtistsGet());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container my-3">
        <TracksRandom tracks={tracks} />
        <ArtistsRandom artists={artists} />
      </div>
    </>
  );
};
