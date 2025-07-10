import { useContext } from "react";
import { GlobalContext } from "../Context";

const Transaction = ({ isOpen, setIsOpen }) => {
  const { formData, setFormData, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
    setIsOpen(false); 
  }

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
            <form onSubmit={handleSubmit}>
              {/* form fields go here */}
              <label htmlFor="description">Enter description</label>
              <input
                type="text"
                onChange={handleFormChange}
                name="description"
                placeholder="Enter Transaction description"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              />
              <label htmlFor="amount">Enter Amount</label>
              <input
                type="number"
                onChange={handleFormChange}
                name="amount"
                placeholder="Enter Transaction amount"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              />

              {/* Radio buttons */}
              <div className="flex gap-3 justify-center mb-5 mt-2">
                <div>
                  <input
                    type="radio"
                    checked={formData.type === "income"}
                    value="income"
                    name="type"
                    onChange={handleFormChange}
                  />

                  <label>Income</label>
                </div>
                <div>
                  <input
                    type="radio"
                    checked={formData.type === "expense"}
                    value="expense"
                    name="type"
                    onChange={handleFormChange}
                  />

                  <label>Expense</label>
                </div>
              </div>

              <div className="flex justify-around">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
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
};

export default Transaction;
