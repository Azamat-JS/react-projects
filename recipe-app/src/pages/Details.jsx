import { useParams } from 'react-router-dom'
import { GlobalContext } from '../components/Context'
import { useContext, useEffect } from 'react';

const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails } = useContext(GlobalContext)

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      console.log(data)
    }
    getRecipeDetails()
  }, [])
  return (
    <div>Details</div>
  )
}

export default Details