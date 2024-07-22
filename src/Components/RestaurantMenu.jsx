import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1 className="p-3 pl-4 font-bold">{name}</h1>
      <p className="p-3 pl-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="p-3 pl-4 font-bold">Menu</h2>
      <ol className="p-3 pl-4">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}

        <li>Burger</li>
        <li>Diet Coke</li>
      </ol>
    </div>
  );
};

export default RestaurantMenu;
