// import React from 'react'

// export default function Main(){

//    const [ingredients, setIngredients] = React.useState([])
 
//    const ingredientList = ingredients.map(ingredient => (
//    <li key={ingredient}>{ingredient}</li>
//    ))

//      function submitItems(event){
//         event.preventDefault()
//         const formData = new FormData(event.currentTarget)
//         const newIngredient = formData.get('ingredient')
//         setIngredients(item => [...item, newIngredient])
//     }
    
//     return (
//         <main>
//             <form onSubmit={submitItems} className="ingredient-form">
//                 <input 
//                 type="text" 
//                 placeholder="e.g. tomato"
//                 aria-label="Add ingredient"
//                 name="ingredient"
//                 />
//                 <button>Add ingredient</button>
//             </form>
//             <ul className="ingredient-list">
//                 {ingredientList}
//             </ul>
//         </main>
//     )
// }
