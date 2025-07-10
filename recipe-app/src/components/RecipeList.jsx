import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 hover:shadow-md border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.strMealThumb}
          alt={item?.strMeal}
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.strArea}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.strMeal}
        </h3>
        <Link
          to={`/details/${item.idMeal}`}
          className="text-sm p-2 px-5 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black active:bg-white hover:bg-gray-600 active:text-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
