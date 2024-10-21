
function InputBox(Props) {  
  
  let { 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
  } = Props
  
  return (
    <div>
      <label className="my-3 text-gray-500 font-semibold">{label}</label>

      <div className="flex justify-center items-center">
        {/* select Box */}
        <select
          className="select select-bordered w-full"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="">
        {/* input */}
        <input
          type="number"
          placeholder={amount}
          className="input-md my-3 rounded-lg w-full"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
}

export default InputBox;
