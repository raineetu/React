import { useState, useContext } from "react";
import { GlobalContext } from "../Context/Globalcontext";

function ExpenseTracker() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions } = useContext(GlobalContext);
  // console.log(context.transactions);

  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen bg-gray-100 p-6 w-96 m-auto">
      <h2 className="text-2xl font-bold">Expense Tracker</h2>

      {/* Balance Section */}
      <div className="text-center">
        <h3 className="text-blue-700 text-xl font-semibold">YOUR BALANCE</h3>
        <p className="font-semibold">Rs. 300</p>
      </div>

      {/* Income & Expenses Section */}
      <div className="flex justify-between bg-white border border-gray-200 shadow-md p-5 rounded-xl w-full max-w-xs">
        <div className="text-center">
          <h4 className="font-medium">Income</h4>
          <p className="text-green-500 font-semibold">Rs. 500</p>
        </div>
        <div className="border-1 border-gray-300"></div>
        <div className="text-center">
          <h4 className="font-medium">Expenses</h4>
          <p className="text-red-500 font-semibold">Rs. 500</p>
        </div>
      </div>

      {/* History Section */}
      <div className="w-full max-w-xs">
        <h3 className="mt-6 text-lg font-semibold">History</h3>
        <div className="border-b border-gray-300 my-2"></div>
        <ul className="bg-white rounded-xl shadow-sm">
          {transactions.map((transaction) => {
            const borderColor =
              transaction.amount < 0 ? "border-red-800" : "border-green-600";
            return (
              <li
                key={transaction.id}
                className={`p-2 border-b last:border-b-0 flex justify-between items-center border-l-4 ${borderColor}`}
              >
                <span>{transaction.text}</span>
                <span>{transaction.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Add New Transaction Section */}
      <div className="w-full max-w-xs">
        <h3 className="mt-6 text-lg font-semibold">Add New Transaction</h3>
        <div className="border-b border-gray-300 my-2"></div>
        {/* Add form inputs or buttons here */}
        <form className="flex flex-col gap-2">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter Text...."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 bg-white rounded-xl"
          />
          <label>
            Amount <br /> (negative-expense, positive-income)
          </label>
          <input
            type="text"
            placeholder="Enter Amount...."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 bg-white rounded-xl"
          />
          <button className="bg-purple-600 text-white border-purple-600 p-3 hover:bg-purple-800 ">
            Add Transactions
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseTracker;
