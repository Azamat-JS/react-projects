import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/Context";
import { useContext, useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetails,
    setRecipeDetails,
    favouritesList,
    handleAddToFavourite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      console.log(data.meals[0].idMeal);
      if (data.meals && data.meals.length > 0) {
        setRecipeDetails(data.meals[0]);
      }
    }
    getRecipeDetails();
  }, [id]);

  if (!recipeDetails) return <p>Loading...</p>;
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl gruop">
          <img
            src={recipeDetails.strMealThumb}
            alt={recipeDetails.strMeal}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails.strArea}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.strMeal}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourite(recipeDetails)}
            className="p-3 px-8 cursor-pointer rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black active:bg-white hover:bg-gray-600 active:text-black text-white"
          >
            {favouritesList &&
            favouritesList.length > 0 &&
            favouritesList.findIndex(
              (item) => item.idMeal === recipeDetails.idMeal
            ) !== -1
              ? "Remove from favourites"
              : "Add to favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 mt-2">
            {Array.from(
              { length: 20 },
              (_, i) => recipeDetails[`strIngredient${i + 1}`]
            )
              .filter((ingredient) => ingredient && ingredient.trim() !== "")
              .map((ingredient, idx) => (
                <li key={idx} className="text-lg text-gray-800">
                  {ingredient}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
