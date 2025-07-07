import React from "react";
import useFetch from "./UseFetchHook";
import './useFetch.css'

const TestFetch = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",{});

  console.log(error, data, pending);
  return (
    <div className="custom-hook-container">
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending... Please wait!</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default TestFetch;
