import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./Context";
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold list-none">
      <li>
        <NavLink to={"/"}>Food Recipe</NavLink>
      </li>
      </h2>
      
<form onSubmit={handleSubmit} className="relative lg:w-96">
  <FaSearch onClick={handleSubmit} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Ingredient Name..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none w-full shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to={"/"} className="text-black hover:text-gray-700 duration-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favourites"} className="text-black hover:text-gray-700 duration-300">
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
