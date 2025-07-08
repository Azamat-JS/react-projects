import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);

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
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  console.log(loading, recipeList);
  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetails, setRecipeDetails }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
