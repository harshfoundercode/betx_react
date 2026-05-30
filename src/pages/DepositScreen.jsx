// import { useState } from "react";
// import {
//   ArrowLeft,
//   RefreshCw,
//   Wallet,
// } from "lucide-react";

// export default function DepositScreen() {
//   const [amount, setAmount] = useState("");

//   const quickAmounts = [
//     500,
//     1000,
//     2000,
//     5000,
//     10000,
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Top Header */}
//       <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-md border-b border-yellow-500/10">
//         <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-black">
//             BET<span className="text-yellow-400">X</span>
//           </h1>

//           <div className="flex items-center gap-2">
//             <div
//               className="
//                 flex items-center gap-2
//                 px-3 py-2
//                 rounded-xl
//                 border border-yellow-500/20
//                 bg-[#111]
//                 text-xs
//               "
//             >
//               <Wallet size={14} />
//               <span>INR</span>
//               <span className="text-yellow-400 font-bold">
//                 0.00
//               </span>
//             </div>

//             <button
//               className="
//                 w-10 h-10
//                 rounded-xl
//                 border border-yellow-500/20
//                 bg-[#111]
//                 flex items-center justify-center
//               "
//             >
//               <RefreshCw size={15} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-md mx-auto px-5 py-6">
//         {/* Title */}
//         <div className="relative flex items-center justify-center mb-8">
//           <button
//             className="
//               absolute left-0
//               w-10 h-10
//               rounded-xl
//               border border-white/10
//               bg-white/5
//               flex items-center justify-center
//             "
//           >
//             <ArrowLeft size={18} />
//           </button>

//           <h2 className="text-lg font-bold tracking-[5px]">
//             DEPOSIT
//           </h2>
//         </div>

//         {/* Enter Amount */}
//         <div className="mb-6">
//           <p
//             className="
//               text-[11px]
//               font-bold
//               tracking-[4px]
//               text-yellow-700
//               mb-4
//             "
//           >
//             ENTER AMOUNT
//           </p>

//           <div
//             className="
//               rounded-[24px]
//               border border-yellow-500/10
//               bg-gradient-to-b
//               from-[#0F0C05]
//               to-[#090909]
//               p-4
//               shadow-[0_0_50px_rgba(245,158,11,0.05)]
//             "
//           >
//             <p
//               className="
//                 text-[11px]
//                 font-bold
//                 tracking-[3px]
//                 text-yellow-700
//                 mb-3
//               "
//             >
//               AMOUNT (INR)
//             </p>

//             <input
//               type="number"
//               placeholder="Enter deposit amount"
//               value={amount}
//               onChange={(e) =>
//                 setAmount(e.target.value)
//               }
//               className="
//                 w-full
//                 h-12
//                 px-4
//                 rounded-2xl
//                 bg-[#1B1B1B]
//                 border border-yellow-500/10
//                 outline-none
//                 text-white
//                 placeholder:text-gray-500
//                 focus:border-yellow-500/30
//               "
//             />

//             {/* Quick Amount */}
//             <div className="flex flex-wrap gap-3 mt-4">
//               {quickAmounts.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() =>
//                     setAmount(item)
//                   }
//                   className="
//                     px-4
//                     py-2
//                     rounded-full
//                     text-xs
//                     font-bold
//                     text-yellow-400
//                     bg-yellow-500/10
//                     border border-yellow-500/20
//                     hover:bg-yellow-500/20
//                     transition-all
//                   "
//                 >
//                   ₹{item.toLocaleString()}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Payment Method */}
//         <div className="mb-6">
//           <p
//             className="
//               text-[11px]
//               font-bold
//               tracking-[4px]
//               text-yellow-700
//             "
//           >
//             PAYMENT METHOD
//           </p>
//         </div>

//         {/* Proceed Button */}
//         <button
//           className="
//             w-full
//             h-14
//             rounded-2xl

//             bg-gradient-to-r
//             from-[#F59E0B]
//             to-[#FBBF24]

//             text-black
//             font-black
//             tracking-[4px]

//             shadow-[0_0_40px_rgba(245,158,11,.35)]

//             hover:shadow-[0_0_60px_rgba(245,158,11,.55)]
//             transition-all

//             mb-8
//           "
//         >
//           PROCEED TO PAY
//         </button>

//         {/* History Title */}
//         <p
//           className="
//             text-[11px]
//             font-bold
//             tracking-[4px]
//             text-yellow-700
//             mb-4
//           "
//         >
//           TRANSACTION HISTORY
//         </p>

//         {/* History Card */}
//         <div
//           className="
//             overflow-hidden
//             rounded-[24px]
//             border border-yellow-500/10
//             bg-gradient-to-b
//             from-[#0F0C05]
//             to-[#090909]
//           "
//         >
//           <div
//             className="
//               flex items-center justify-between
//               p-4
//               border-b border-white/5
//             "
//           >
//             <h3
//               className="
//                 text-sm
//                 font-semibold
//                 tracking-[2px]
//               "
//             >
//               RECENT DEPOSITS
//             </h3>

//             <button
//               className="
//                 w-9 h-9
//                 rounded-xl
//                 bg-white/5
//                 border border-white/10
//                 flex items-center justify-center
//               "
//             >
//               <RefreshCw size={14} />
//             </button>
//           </div>

//           <div
//             className="
//               h-36
//               flex items-center justify-center
//               text-gray-500
//               text-sm
//             "
//           >
//             No transactions found
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import {
  ArrowLeft,
  RefreshCw,
  Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DepositScreen() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");

  const [history, setHistory] =
    useState([
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

  const quickAmounts = [
    500,
    1000,
    2000,
    5000,
    10000,
  ];

  const handleDeposit = () => {
    if (
      !amount ||
      Number(amount) <= 0
    ) {
      alert(
        "Please enter valid amount"
      );
      return;
    }

    const newTxn = {
      id: Date.now(),
      amount: Number(amount),
      status: "Pending",
      date: "Just Now",
    };

    setHistory((prev) => [
      newTxn,
      ...prev,
    ]);

    alert(
      `Deposit Initiated ₹${amount}`
    );

    setAmount("");
  };

  return (
    <div className="min-h-screen bg-black text-white pb-24">

      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-md border-b border-yellow-500/10">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">

          <h1 className="text-xl font-black">
            BET
            <span className="text-yellow-400">
              X
            </span>
          </h1>

          <div className="flex items-center gap-2">

            <div
              className="
                flex items-center gap-2
                px-2.5 py-1.5
                rounded-lg
                border border-yellow-500/20
                bg-[#111]
                text-[11px]
              "
            >
              <Wallet size={12} />

              <span>INR</span>

              <span className="text-yellow-400 font-bold">
                0.00
              </span>
            </div>

            <button
              className="
                w-8 h-8
                rounded-lg
                border border-yellow-500/20
                bg-[#111]
                flex items-center justify-center
              "
            >
              <RefreshCw size={13} />
            </button>

          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-4">

        {/* Title */}
        <div className="relative flex items-center justify-center mb-4">

          <button
            onClick={() =>
              navigate(-1)
            }
            className="
              absolute left-0
              w-7 h-7
              rounded-lg
              border border-white/10
              bg-white/5
              flex items-center justify-center
            "
          >
            <ArrowLeft size={13} />
          </button>

          <h2 className="text-sm font-bold tracking-[3px]">
            DEPOSIT
          </h2>

        </div>

        {/* Amount Section */}
        <div className="mb-4">

          <p
            className="
              text-[9px]
              font-bold
              tracking-[2px]
              text-yellow-700
              mb-2
            "
          >
            ENTER AMOUNT
          </p>

          <div
            className="
              rounded-[16px]
              border border-yellow-500/10
              bg-gradient-to-b
              from-[#0F0C05]
              to-[#090909]
              p-3
            "
          >
            <p
              className="
                text-[9px]
                font-bold
                tracking-[2px]
                text-yellow-700
                mb-2
              "
            >
              AMOUNT (INR)
            </p>

            <input
              type="number"
              placeholder="Enter deposit amount"
              value={amount}
              onChange={(e) =>
                setAmount(
                  e.target.value
                )
              }
              className="
                w-full
                h-10
                px-3
                rounded-xl
                bg-[#1B1B1B]
                border border-yellow-500/10
                outline-none
                text-white
                text-sm
                placeholder:text-gray-500
                focus:border-yellow-500/30
              "
            />

            {/* Quick Amounts */}
            <div className="flex flex-wrap gap-2 mt-3">

              {quickAmounts.map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setAmount(
                        item.toString()
                      )
                    }
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      text-[11px]
                      font-bold
                      text-yellow-400
                      bg-yellow-500/10
                      border border-yellow-500/20
                    "
                  >
                    ₹
                    {item.toLocaleString()}
                  </button>
                )
              )}

            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="mb-4">
          <p
            className="
              text-[9px]
              font-bold
              tracking-[2px]
              text-yellow-700
            "
          >
            PAYMENT METHOD
          </p>

          <div
            className="
              mt-2
              rounded-xl
              border border-yellow-500/10
              bg-[#111]
              p-3
            "
          >
            <div className="flex items-center justify-between">

              <div>
                <h4 className="text-xs font-semibold">
                  UPI Payment
                </h4>

                <p className="text-[10px] text-gray-500 mt-1">
                  Instant Deposit
                </p>
              </div>

              <div
                className="
                  w-4 h-4
                  rounded-full
                  border-2
                  border-yellow-500
                  bg-yellow-500
                "
              />
            </div>
          </div>
        </div>

        {/* Deposit Button */}
        <button
          onClick={handleDeposit}
          className="
            w-full
            h-10
            rounded-xl
            bg-gradient-to-r
            from-[#F59E0B]
            to-[#FBBF24]
            text-black
            font-bold
            text-xs
            tracking-[2px]
            shadow-[0_0_25px_rgba(245,158,11,.25)]
            mb-5
          "
        >
          PROCEED TO PAY
        </button>

        {/* History */}
        <p
          className="
            text-[9px]
            font-bold
            tracking-[2px]
            text-yellow-700
            mb-2
          "
        >
          TRANSACTION HISTORY
        </p>

        <div
          className="
            rounded-[16px]
            border border-yellow-500/10
            bg-gradient-to-b
            from-[#0F0C05]
            to-[#090909]
            overflow-hidden
          "
        >
          <div
            className="
              flex items-center justify-between
              p-3
              border-b border-white/5
            "
          >
            <h3 className="text-xs font-semibold">
              RECENT DEPOSITS
            </h3>

            <button
              className="
                w-7 h-7
                rounded-lg
                bg-white/5
                border border-white/10
                flex items-center justify-center
              "
            >
              <RefreshCw size={12} />
            </button>
          </div>

          {history.length === 0 ? (
            <div
              className="
                h-24
                flex items-center justify-center
                text-xs
                text-gray-500
              "
            >
              No transactions found
            </div>
          ) : (
            <div className="divide-y divide-white/5">

              {history.map((item) => (
                <div
                  key={item.id}
                  className="
                    p-3
                    flex items-center justify-between
                  "
                >
                  <div>
                    <p className="text-xs font-semibold">
                      ₹
                      {item.amount.toLocaleString()}
                    </p>

                    <p className="text-[10px] text-gray-500 mt-1">
                      {item.date}
                    </p>
                  </div>

                  <span
                    className={`
                      px-2 py-1
                      rounded-full
                      text-[10px]
                      font-semibold

                      ${
                        item.status ===
                        "Success"
                          ? "bg-green-500/10 text-green-400"
                          : item.status ===
                            "Pending"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                      }
                    `}
                  >
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