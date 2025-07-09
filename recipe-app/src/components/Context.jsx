import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event?.preventDefault();
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`
      );
      const data = await res.json();

      if (data.meals) {
        setRecipeList(data.meals);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex((meal) => meal.idMeal === getCurrentItem.idMeal);

    if(index === -1)  {
      cpyFavouritesList.push(getCurrentItem)
    }else {
      cpyFavouritesList.splice(index)
    }

    setFavouritesList(cpyFavouritesList)
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavourite,
        favouritesList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
