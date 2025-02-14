export default function Main(){
    return (
        <main>
            <form className="ingredient-form">
                <input 
                type="text" 
                placeholder="e.g. tomato"
                aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}