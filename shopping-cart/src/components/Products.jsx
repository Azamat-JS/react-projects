import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

const Products = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    console.log("removed");
    dispatch(removeFromCart(product.id));
  }

  const toggleLike = () => setLiked(!liked);
  return (
    <div className="relative">
      <FaHeart
        onClick={toggleLike}
        className={`w-5 h-5 absolute right-4 top-14 ${
          liked ? "text-red-500" : "text-black"
        }`}
      />
      <div className="group flex flex-col shadow-xl hover:shadow-md items-center gap-3 p-4 mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product.title}
            className="object-cover w-[80%] h-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div>
          <p className="text-gray-700 font-semibold text-medium">
            ${product?.price}
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-red-950 text-white border-2 hover:bg-red-700 active:bg-red-400 rounded-xl font-bold p-4"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
