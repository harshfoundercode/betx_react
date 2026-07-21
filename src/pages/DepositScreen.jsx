import { useState } from "react";
import { RefreshCw, Wallet } from "lucide-react";
import { useAuth } from '../pages/services/AuthContext';

export default function DepositScreen() {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMethod, setSelectedMethod] = useState('upi');

  const [history, setHistory] = useState([
    {
      id: 1,
      amount: 500,
      status: "Success",
      date: "Today",
    },
    {
      id: 2,
      amount: 1000,
      status: "Pending",
      date: "Yesterday",
    },
  ]);

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  const paymentMethods = [
    { id: 'upi', name: 'UPI Payment', description: 'Instant Deposit' },
    { id: 'bank', name: 'Bank Transfer', description: '1-2 Business Days' },
  ];

  const handleDeposit = async () => {
    setError('');

    if (!amount || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (Number(amount) < 100) {
      setError('Minimum deposit is ₹100');
      return;
    }

    if (Number(amount) > 100000) {
      setError('Maximum deposit is ₹100,000');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const newTxn = {
        id: Date.now(),
        amount: Number(amount),
        status: "Pending",
        date: "Just Now",
      };

      setHistory((prev) => [newTxn, ...prev]);
      alert(`Deposit Initiated ₹${amount} via ${selectedMethod.toUpperCase()}`);
      setAmount("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-md border-b border-yellow-500/10">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-black">
            BET<span className="text-yellow-400">X</span>
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-yellow-500/20 bg-[#111] text-[11px]">
              <Wallet size={12} />
              <span>INR</span>
              <span className="text-yellow-400 font-bold">
                {user?.balance?.toLocaleString() || '0.00'}
              </span>
            </div>

            <button className="w-8 h-8 rounded-lg border border-yellow-500/20 bg-[#111] flex items-center justify-center">
              <RefreshCw size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-4">
        {/* Amount Section */}
        <div className="mb-4">
          <p className="text-[9px] font-bold tracking-[2px] text-yellow-700 mb-2">
            ENTER AMOUNT
          </p>

          <div className="rounded-[16px] border border-yellow-500/10 bg-gradient-to-b from-[#0F0C05] to-[#090909] p-3">
            <p className="text-[9px] font-bold tracking-[2px] text-yellow-700 mb-2">
              AMOUNT (INR)
            </p>

            <input
              type="number"
              placeholder="Enter deposit amount"
              value={amount}
              onChange={(e) => {
                const val = e.target.value;
                if (val === '' || (Number(val) >= 0 && Number(val) <= 100000)) {
                  setAmount(val);
                  setError('');
                }
              }}
              min="1"
              max="100000"
              className="w-full h-10 px-3 rounded-xl bg-[#1B1B1B] border border-yellow-500/10 outline-none text-white text-sm placeholder:text-gray-500 focus:border-yellow-500/30"
            />

            {error && (
              <p className="text-red-400 text-xs mt-2">{error}</p>
            )}

            <div className="flex flex-wrap gap-2 mt-3">
              {quickAmounts.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setAmount(item.toString());
                    setError('');
                  }}
                  className="px-3 py-1.5 rounded-full text-[11px] font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 hover:bg-yellow-500/20 transition-all"
                >
                  ₹{item.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <p className="text-[9px] font-bold tracking-[2px] text-yellow-700">
            PAYMENT METHOD
          </p>

          <div className="mt-2 space-y-2">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`
                  rounded-xl border p-3 cursor-pointer transition-all
                  ${selectedMethod === method.id 
                    ? 'border-yellow-500 bg-yellow-500/10' 
                    : 'border-yellow-500/10 bg-[#111]'}
                `}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-semibold">{method.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-1">{method.description}</p>
                  </div>
                  <div className={`
                    w-4 h-4 rounded-full border-2 flex items-center justify-center
                    ${selectedMethod === method.id 
                      ? 'border-yellow-500' 
                      : 'border-gray-500'}
                  `}>
                    {selectedMethod === method.id && (
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deposit Button */}
        <button
          onClick={handleDeposit}
          disabled={isLoading}
          className={`
            w-full h-10 rounded-xl
            bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]
            text-black font-bold text-xs tracking-[2px]
            shadow-[0_0_25px_rgba(245,158,11,.25)]
            mb-5
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
            transition-all duration-300
          `}
        >
          {isLoading ? 'PROCESSING...' : 'PROCEED TO PAY'}
        </button>

        {/* History */}
        <p className="text-[9px] font-bold tracking-[2px] text-yellow-700 mb-2">
          TRANSACTION HISTORY
        </p>

        <div className="rounded-[16px] border border-yellow-500/10 bg-gradient-to-b from-[#0F0C05] to-[#090909] overflow-hidden">
          <div className="flex items-center justify-between p-3 border-b border-white/5">
            <h3 className="text-xs font-semibold">RECENT DEPOSITS</h3>
            <button className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <RefreshCw size={12} />
            </button>
          </div>

          {history.length === 0 ? (
            <div className="h-24 flex items-center justify-center text-xs text-gray-500">
              No transactions found
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {history.map((item) => (
                <div key={item.id} className="p-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">
                      ₹{item.amount.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">{item.date}</p>
                  </div>
                  <span className={`
                    px-2 py-1 rounded-full text-[10px] font-semibold
                    ${item.status === "Success" 
                      ? "bg-green-500/10 text-green-400" 
                      : item.status === "Pending" 
                        ? "bg-yellow-500/10 text-yellow-400" 
                        : "bg-red-500/10 text-red-400"}
                  `}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}