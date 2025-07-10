import React from 'react'
import Transaction from './Transaction'
import TransactionChart from './Chart'

const Summary = ({isOpen, setIsOpen, totalExpense, totalIncome}) => {
  return (
    <div className='flex p-6 border border-gray-100 overflow-hidden rounded-md bg-white'>
        <div className='flex flex-col lg:flex-row w-full justify-center items-center'>
            <div className='flex flex-1 flex-col items-center justify-evenly ml-[-80px] mr-2'>
                <header className=' font-bold text-xl mb-4 text-gray-600'>
                    Balance is $ {totalIncome - totalExpense}
                </header>
                <div className='flex justify-evenly items-center bg-gray-50 w-full h-20 border border-gray-100'>
                    <div className='flex flex-col'>
                        <header className='font-bold text-4xl text-gray-700'>$ {totalIncome}</header>
                        <p className='text-gray-600'>Total Income</p>
                    </div>
                </div>
                <div className='flex justify-evenly items-center bg-gray-50 w-full h-20 border border-gray-100'>
                    <div className='flex flex-col'>
                        <header className='font-bold text-4xl text-gray-700'>$ {totalExpense}</header>
                        <p className='text-gray-600'>Total Expense</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 mt-10 ml-[-90px] mr-5 w-[300px] h-[300px] items-center justify-center'>
                <header className='font-bold text-4xl'>
                    <TransactionChart expense={totalExpense} income={totalIncome}/>
                </header>
            </div>
        </div>
        <Transaction isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Summary