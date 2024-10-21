import { useState } from "react";
import InputBox from "./components/InputBox.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState("Enter Amount");
  const [convertedAmount, setConvertedAmount] = useState("Converted Amount");

  const currencyInfo = useCurrencyInfo(from) // key + values
  const options = Object.keys(currencyInfo) // only keys

    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to]);
    };

    const swap = () => {
      setFrom(to);
      setTo(from);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
    }


  return (
    <div className="MainDiv flex justify-center items-center ">
      <div className=" innerDiv  rounded-2xl m-6 p-9">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl my-2 text-gray-500 font-semibold">
            Currency Exchange
          </h1>
          <div className="flex my-2">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <button onClick={swap} className="btn btn-neutral m-6">
              <FontAwesomeIcon icon={faRightLeft} />
            </button>
            <InputBox
              label="To"
              selectCurrency={to}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)} // The event currency from component
              amount={convertedAmount}
            />
          </div>
          <button onClick={convert} className="btn btn-neutral my-2">
            Convert {from} to {to}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
