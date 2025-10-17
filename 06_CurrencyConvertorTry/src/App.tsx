
import { HiSwitchVertical } from 'react-icons/hi';
import useCurrencyInfo from './hook/useCurrencyinfo.js';
import { useState } from 'react';
function App() {
  // const { currencies, fromCurrency, toCurrency, amount, convertedAmount, setFromCurrency, setToCurrency, setAmount, handleSwap, handleConvert } = useCurrencyInfo();

  let [ from ,setFrom ] = useState("usd");
  let [ to ,setTo ] = useState("inr");
  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyInfo(from);
  const option = Object.keys(currencyinfo);
  console.log(option);

  


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Currency Converter
        </h1>

        {/* From Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="0"
            />
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            >
              {/* // currencies map  */}
              {option.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center mb-6">
          <button
            // onClick={handleSwap}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-200 shadow-md"
          >
            <HiSwitchVertical className="w-6 h-6" />
          </button>
        </div>

        {/* To Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              // value={convertedAmount.toFixed(2)}
              readOnly
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="0"
            />
            <select
              // setcurrencyTo
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            >
              {/* // currencies map  */}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md"
        >
          Convert USD to INR
        </button>

        {/* Result Display */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-center text-gray-700">
            <span className="font-semibold">4345</span> = 
            <span className="font-bold text-blue-600">1000000000</span>
          </p>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
