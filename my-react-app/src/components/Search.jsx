import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Search = ({searchTerm, setSearchTerm}) => {
  return (
       <div style={{ position: 'relative', width: '300px' }}>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='bg-blue-950 border text-white text-center w-full h-10 text-2xl mt-2 rounded-md pl-10'
      />
      <FaSearch style={{ 
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ccc',
      }} />
    </div>
  )
}

export default Search