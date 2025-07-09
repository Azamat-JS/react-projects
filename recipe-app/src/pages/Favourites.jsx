import React, { useContext } from "react";
import RecipeItem from "../components/RecipeList";
import { GlobalContext } from "../components/Context";

const Favourites = () => {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => (
          <RecipeItem key={item.idMeal} item={item} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favourites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
