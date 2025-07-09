import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalCard, setTotalCard] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCard(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCard);
  return (
    <div>
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto"></div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 hover:bg-red-700 active:bg-red-400 rounded-xl font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
