const View = ({ type, data }) => {
  return (
    <div className="flex flex-col w-full bg-white mr-4 mt-10 p-5 pb-4 border border-gray-100 rounded-lg">
      <div className="flex justify-between items-center">
        <header className="text-4xl font-medium text-red-700">
          {type === "income" ? "Income" : "Expense"}
        </header>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className={`mt-4 flex justify-between items-center border p-4 rounded-md ${
            type === "expense"
              ? "bg-red-50 border-red-100"
              : "bg-blue-50 border-blue-100"
          }`}
        >
          <p className="ml-3 font-bold text-gray-600">{item.description}</p>
          <p className="text-gray-700 font-semibold">$ {item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default View;
