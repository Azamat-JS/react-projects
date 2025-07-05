import { useEffect, useState } from "react"
import './data.css'

const LoadMoreData = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

async function fetchProducts() {
  try {
    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${count * 20}`
    );
    const result = await response.json();

    if (result && Array.isArray(result.products) && result.products.length) {
      setProducts((prevData) => {
        const existingIds = new Set(prevData.map((p) => p.id));
        const newProducts = result.products.filter((p) => !existingIds.has(p.id));
        return [...prevData, ...newProducts];
      });
    }

    setLoading(false);
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}


    useEffect(() => {
        fetchProducts()
    }, [count]);

    useEffect(() => {
        if(products && products.length === 100) setDisableButton(true)
    })

    if(loading){
        return <div>Loading data ! please wait</div>
    }
  return (
    <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ? 
                products.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                )) : null}
        </div>
        <div className="button-container">
            <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
            {
                disableButton ? <p>You have reached to 100 products</p> : null
            }
        </div>
    </div>

  )
}

export default LoadMoreData