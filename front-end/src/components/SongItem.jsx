import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const SongItem = ({ image, name, duration, _id , index }) => {
    return (
        <Link to={`/song/${_id}`} className="song-item">
            <div className="song-item__number-album">
                <p>{index + 1}</p>

                <div className="song-item__album">
                    <img className="song-item__image" src={image} alt={`Imagem da música ${name}`} />
                    <p className="song-item__name">{name}</p>
                </div>
            </div>
            <p>{duration}</p>
        </Link>
    )
}

export default SongItem