import React, {useContext} from 'react'
import { GlobalContext } from '../components/Context'
import RecipeItem from '../components/RecipeList'

const Home = () => {
  const {recipeList, loading} = useContext(GlobalContext);

  if(loading){
    return <h2>Loading... Please wait!</h2>
  }
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipeList && recipeList.length > 0 ?
          recipeList.map((item) => <RecipeItem key={item.idMeal} item={item}/>)
        : <div>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>To see the meals please search</p>
        </div>
      }
    </div>
  )
}

export default Home