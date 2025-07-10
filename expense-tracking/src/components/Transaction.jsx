import {useState} from 'react'

const Transaction = ({isOpen, setIsOpen}) => {

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Modal Overlay */}
          <div
            className="fixed inset-0 bg-gray-500 opacity-70"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-lg z-60 w-full max-w-md p-6 relative">
            {/* Modal Header */}
            <h2 className="text-xl font-semibold mb-4">Add New Transaction</h2>

            {/* Modal Body */}
            <form>
              {/* form fields go here */}
              <label htmlFor='description'>Enter description</label>
              <input
                type="text"
                name='description'
                placeholder="Enter Transaction description"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              />
              <label htmlFor='amount'>Enter Amount</label>
              <input
                type="number"
                name='amount'
                placeholder="Enter Transaction amount"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              />
              <div className='flex gap-3 justify-center mb-5 mt-2'>
                <div>
              <input type="radio" name='radio' />
              <label htmlFor="radio-expense">Expense</label>
                </div>
                <div>
              <input type="radio" name='radio' />
              <label htmlFor="radio-input">Income</label>
                </div>
              </div>

            <div className='flex justify-around'>

              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
                >
                Submit
              </button>
            </div>

            </form>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-4xl top-2 right-3 text-gray-400 hover:text-gray-600"
              >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Transaction