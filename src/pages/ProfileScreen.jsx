import { useState } from "react";
import {
  ArrowLeft,
  Plus,
  ArrowUp,
  Wallet,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileScreen() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("all");

  const betHistory = [
    {
      id: 1,
      game: "Aviator",
      amount: 500,
      profit: 350,
      status: "won",
      time: "Today, 12:45 PM",
    },
    {
      id: 2,
      game: "Mines",
      amount: 200,
      profit: -200,
      status: "lost",
      time: "Today, 11:20 AM",
    },
    {
      id: 3,
      game: "Crash",
      amount: 1000,
      profit: 650,
      status: "won",
      time: "Yesterday",
    },
    {
      id: 4,
      game: "Roulette",
      amount: 300,
      profit: -300,
      status: "lost",
      time: "Yesterday",
    },
  ];

  const filteredBets =
    activeTab === "all"
      ? betHistory
      : betHistory.filter(
        (bet) =>
          bet.status === activeTab
      );

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className=" bg-black text-white">
      <div className="max-w-md mx-auto px-4 py-4">



        {/* User */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <div
              className="
                w-12 h-12
                rounded-full
                bg-gradient-to-br
                from-yellow-500
                to-yellow-400
                flex items-center justify-center
                text-black
                font-black
                text-xl
              "
            >
              AB
            </div>
            <div
              className="
                absolute
                bottom-0
                right-0
                w-3.5 h-3.5
                rounded-full
                bg-green-500
                border-2
                border-black
              "
            />
          </div>

          <h2 className="mt-1 text-lg font-bold">
            ABCD
          </h2>

          <p className="text-[10px] text-gray-500">
            ID: #6a17...3c5e
          </p>
        </div>

        {/* Deposit Withdraw */}
        <div className="grid grid-cols-2 gap-2 mb-4">

          <button
            onClick={() =>
              navigate("/deposit")
            }
            className="
              rounded-[14px]
              p-3
              bg-green-500/10
              border border-green-500/20
              flex flex-col items-center
              transition-all
              hover:scale-[1.02]
            "
          >
            <div
              className="
                w-8 h-8
                rounded-full
                bg-green-500/10
                flex items-center justify-center
                mb-2
              "
            >
              <Plus
                size={15}
                className="text-green-400"
              />
            </div>

            <span className="font-bold text-xs">
              DEPOSIT
            </span>

            <span className="text-[10px] text-green-300 mt-1">
              Add funds
            </span>
          </button>

          <button
            onClick={() =>
              navigate("/withdraw")
            }
            className="
              rounded-[14px]
              p-3
              bg-yellow-500/10
              border border-yellow-500/20
              flex flex-col items-center
              transition-all
              hover:scale-[1.02]
            "
          >
            <div
              className="
                w-8 h-8
                rounded-full
                bg-yellow-500/10
                flex items-center justify-center
                mb-2
              "
            >
              <ArrowUp
                size={15}
                className="text-yellow-400"
              />
            </div>

            <span className="font-bold text-xs">
              WITHDRAW
            </span>

            <span className="text-[10px] text-yellow-300 mt-1">
              Cash out
            </span>
          </button>

        </div>

        {/* Account */}
        <div className="mb-4">
          <h3
            className="
              text-[10px]
              font-bold
              tracking-[3px]
              text-yellow-700
              mb-2
            "
          >
            ACCOUNT
          </h3>

          <button
            onClick={() =>
              navigate("/account-statement")
            }
            className="
              w-full
              rounded-[14px]
              border border-yellow-500/10
              bg-gradient-to-r
              from-[#111]
              to-[#16120A]
              p-2.5
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  w-7 h-7
                  rounded-lg
                  bg-yellow-500/10
                  flex items-center justify-center
                "
              >
                <Wallet
                  size={13}
                  className="text-yellow-400"
                />
              </div>

              <div className="text-left">
                <h4 className="font-medium text-xs">
                  Transactions
                </h4>

                <p className="text-[10px] text-gray-500">
                  Deposit & withdrawal history
                </p>
              </div>
            </div>

            <ChevronRight
              size={13}
              className="text-gray-500"
            />
          </button>
        </div>

        {/* Bet History */}
        <div className="mb-5">

          <h3
            className="
              text-[10px]
              font-bold
              tracking-[3px]
              text-yellow-700
              mb-2
            "
          >
            BET HISTORY
          </h3>

          <div className="flex gap-2 mb-3">

            {[
              "all",
              "won",
              "lost",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`
                  px-3
                  h-7
                  rounded-full
                  text-[11px]
                  font-semibold
                  transition-all

                  ${activeTab === tab
                    ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                    : "bg-white/5 border border-white/10 text-gray-400"
                  }
                `}
              >
                {tab.toUpperCase()}
              </button>
            ))}

          </div>

          <div className="space-y-2 max-h-72 overflow-y-auto">

            {filteredBets.map((bet) => (
              <div
                key={bet.id}
                className="
                  rounded-xl
                  border border-white/5
                  bg-[#111]
                  p-3
                "
              >
                <div className="flex justify-between items-start">

                  <div>
                    <h4 className="text-xs font-semibold">
                      {bet.game}
                    </h4>

                    <p className="text-[10px] text-gray-500 mt-1">
                      {bet.time}
                    </p>
                  </div>

                  <span
                    className={`
                      px-2 py-1
                      rounded-full
                      text-[10px]
                      font-semibold

                      ${bet.status === "won"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                      }
                    `}
                  >
                    {bet.status.toUpperCase()}
                  </span>

                </div>

                <div className="flex justify-between mt-3">

                  <div>
                    <p className="text-[10px] text-gray-500">
                      Bet Amount
                    </p>

                    <p className="text-xs font-medium">
                      ₹{bet.amount}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] text-gray-500">
                      Profit/Loss
                    </p>

                    <p
                      className={`
                        text-xs
                        font-bold

                        ${bet.profit > 0
                          ? "text-green-400"
                          : "text-red-400"
                        }
                      `}
                    >
                      {bet.profit > 0
                        ? "+"
                        : ""}
                      ₹{bet.profit}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="
            w-full
            h-9
            rounded-[14px]
            bg-red-500/10
            border border-red-500/20
            text-red-500
            font-bold
            tracking-[1px]
            text-xs
            flex items-center justify-center gap-2
          "
        >
          <LogOut size={13} />
          LOGOUT
        </button>

      </div>
    </div>
  );
}