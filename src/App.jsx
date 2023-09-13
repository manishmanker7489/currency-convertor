
import Input from './Components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import { useState } from 'react';

function App() {

  const [amount, setamount] = useState();
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const option =  Object.keys(currencyInfo);

  const swap =()=>{
    setto(from);
    setfrom(to);
    setamount(convertedAmount);
    setconvertedAmount(amount);
  }

  const convert = ()=>{
    setconvertedAmount( ( amount * currencyInfo[to] ).toFixed(2) )
  }
 

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1214630488/photo/currency-converter-concept.jpg?s=612x612&w=0&k=20&c=HI66nJqgsj6MxcjvoOqNNxHJX-6UXKv58h24jW_zr0g=')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOption={option}
                            onCurrencyChange={ (currency) => setfrom(currency) }
                            selectCurrency={from}
                            onAmountChange={ (amount)=> setamount(amount) }
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                             label="To"
                             amount={convertedAmount}
                             currencyOption={option}
                             onCurrencyChange={ (currency) => setto(currency) }
                             selectCurrency={to}
                             amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()} 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
