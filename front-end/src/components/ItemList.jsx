import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem";

// eslint-disable-next-line react/prop-types
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const finalItems = isHome ? items : Infinity

    return <div className="item-list">
        <div className="item-list__header">
            <h2>{title}</h2>
            {isHome ? (
                <Link className="item-list__link" to={path}>
                    Mostrar Tudo
                </Link>
            ) : (
                <></>
            )}
        </div>
        <div className="item-list__container">
            {itemsArray
                // eslint-disable-next-line react/prop-types
                .filter((currentValue, index) => index < finalItems)
                .map((currObj, index) => (
                    <SingleItem
                        idPath={idPath}
                        {...currObj}
                        key={`${title}-${index}`}/>
                    )
                )
            }
        </div>
    </div>
}

export default ItemList;