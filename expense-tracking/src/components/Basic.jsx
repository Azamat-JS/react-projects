import { useState } from "react";
import Summary from "./Summary";
import View from "./View";


const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen(){
    return setIsOpen((prev) => !prev)
  }
  return (
    <div className="flex flex-col text-center px-5">
      <div className="flex mt-12 justify-between items-center">
        <header className="font-bold text-2xl text-blue-500 hidden sm:block">
          Expense Tracker
        </header>
        <div className="flex items-center">
          <button onClick={handleIsOpen} className="bg-blue-800 rounded-md font-medium text-[15px] hover:bg-gray-800 active:bg-gray-600 p-2 text-white ml-4">
            Add New Transaction
          </button>
        </div>
      </div>
      <Summary isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col lg:flex-row w-full items-start justify-evenly">
        <View/>
        <View/>
      </div>
    </div>
  )
};

export default Basic;