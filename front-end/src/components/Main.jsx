import ItemList from "./ItemList";
import { artistArray } from "../assets/artists";
import { songsArray } from "../assets/songs";

// eslint-disable-next-line react/prop-types
const Main = ({ type }) => {
  return (
    <div className="main">
        {type === "artists" || type === undefined ? (
            <ItemList
                title='Artistas Populares'
                items={5}
                itemsArray={artistArray}
                path='/artists'
                idPath='/artist'
            />
        ) : (
            <></>
        )}
        {type === "songs" || type === undefined ? (
            <ItemList
                title='Músicas Populares'
                items={20}
                itemsArray={songsArray}
                path='/songs'
                idPath='/song'
            />
        ) : (
            <></>
        )}
    </div>
  );
}

export default Main;