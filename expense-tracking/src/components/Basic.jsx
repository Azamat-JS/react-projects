import { useContext, useEffect, useState } from "react";
import Summary from "./Summary";
import View from "./View";
import { GlobalContext } from "../Context";


const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalExpense, setTotalExpense,
    totalIncome, setTotalIncome, allTransactions} = useContext(GlobalContext)

  function handleIsOpen() {
    return setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === 'income' 
      ? (income = income + parseFloat(item.amount))
      : (expense = expense + parseFloat(item.amount))
    });

  setTotalExpense(expense);
  setTotalIncome(income);
  },[allTransactions])
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
      <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col lg:flex-row w-full items-start justify-evenly">
        <View data={allTransactions.filter((item) => item.type === 'expense')} type={'expense'}/>
        <View data={allTransactions.filter((item) => item.type === 'income')} type={'income'}/>
      </div>
    </div>
  )
};

export default Basic;