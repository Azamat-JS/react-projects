import React from 'react'
import UseFetchHook from './UseFetchHook'

const TestFetch = () => {
    const {data, error, pending} = UseFetchHook('https://dummyjson.com/products', {});

    console.log(error, data, pending)
  return (
    <div>
        <h1>Use Fetch Hook</h1>
    </div>
  )
}

export default TestFetch