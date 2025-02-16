import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/songs";
import { artistArray } from "../assets/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, _id } = songsArray.filter(
    (currSongObj) => currSongObj._id === id)[0]
  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.name === artist)[0]

  const songsArrayFromArtist = songsArray.filter(
    (currSongsObj) => currSongsObj.artist === artist
  )

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id
  const randomId2FromArtist = songsArrayFromArtist[randomIndex]._id

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
        <img
          src={image}
          alt={`Imagem da música ${artist}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>
        <Player
          id={_id}
          audio={audio}
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
        />
        <div>
          <p  className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
}

export default Song;