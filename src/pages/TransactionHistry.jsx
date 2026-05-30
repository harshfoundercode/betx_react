import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Wallet,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AccountStatementScreen() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("all");

  const transactions = [];

  return (
    <div className="min-h-screen bg-black text-white pb-24">

      {/* Top Header */}
      <div className="sticky top-0 z-20 bg-black border-b border-yellow-500/10">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">

          <h1 className="text-xl font-black">
            BET
            <span className="text-yellow-400">
              X
            </span>
          </h1>

          <div className="flex items-center gap-2">

            <div className="px-3 py-1.5 rounded-lg border border-yellow-500/20 bg-[#111] flex items-center gap-2 text-xs">
              <Wallet size={12} />
              <span>INR</span>
              <span className="text-yellow-400 font-bold">
                0.00
              </span>
            </div>

            <button className="w-8 h-8 rounded-lg border border-yellow-500/20 bg-[#111] flex items-center justify-center">
              <RefreshCw size={13} />
            </button>

          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-4">

        {/* Header */}
        <div className="relative flex items-center justify-center mb-5">

          <button
            onClick={() => navigate(-1)}
            className="
              absolute left-0
              w-8 h-8
              rounded-xl
              bg-[#111]
              border border-white/10
              flex items-center justify-center
            "
          >
            <ArrowLeft size={14} />
          </button>

          <h2 className="text-sm font-bold tracking-[3px]">
            ACCOUNT STATEMENT
          </h2>

        </div>

        {/* Date Range */}
        <div
          className="
            rounded-2xl
            border border-yellow-500/10
            bg-[#0E0B05]
            p-4
            mb-4
          "
        >
          <h3 className="text-[10px] font-bold tracking-[2px] text-yellow-700 mb-3">
            DATE RANGE
          </h3>

          <div className="grid grid-cols-2 gap-3">

            <div>
              <p className="text-[10px] text-gray-500 mb-1">
                FROM
              </p>

              <div className="h-10 rounded-xl bg-[#1A1A1A] border border-white/5 px-3 flex items-center justify-between text-xs">
                <span>05/30/2025</span>
                <Calendar size={13} />
              </div>
            </div>

            <div>
              <p className="text-[10px] text-gray-500 mb-1">
                TO
              </p>

              <div className="h-10 rounded-xl bg-[#1A1A1A] border border-white/5 px-3 flex items-center justify-between text-xs">
                <span>05/30/2026</span>
                <Calendar size={13} />
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">

          <div className="rounded-2xl p-3 border border-green-500/20 bg-green-500/5">
            <p className="text-[10px] text-gray-400">
              Total Deposit
            </p>

            <h3 className="text-2xl font-bold text-green-400 mt-1">
              ₹0.00
            </h3>
          </div>

          <div className="rounded-2xl p-3 border border-red-500/20 bg-red-500/5">
            <p className="text-[10px] text-gray-400">
              Total Withdraw
            </p>

            <h3 className="text-2xl font-bold text-red-400 mt-1">
              ₹0.00
            </h3>
          </div>

          <div className="rounded-2xl p-3 border border-yellow-500/10 bg-[#111]">
            <p className="text-[10px] text-gray-400">
              Net Balance
            </p>

            <h3 className="text-2xl font-bold text-green-400 mt-1">
              ₹0.00
            </h3>
          </div>

          <div className="rounded-2xl p-3 border border-yellow-500/10 bg-[#111]">
            <p className="text-[10px] text-gray-400">
              Transactions
            </p>

            <h3 className="text-2xl font-bold text-yellow-400 mt-1">
              0
            </h3>
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">

          {[
            "all",
            "deposit",
            "withdraw",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`
                px-4
                h-8
                rounded-full
                text-xs
                font-semibold

                ${
                  activeTab === tab
                    ? "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
                    : "bg-[#111] text-gray-400 border border-white/5"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() +
                tab.slice(1)}
            </button>
          ))}

        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-yellow-500/10">

          <div className="grid grid-cols-4 bg-[#151008] text-[10px] font-bold text-yellow-600 px-3 py-3">
            <span>#</span>
            <span>Date</span>
            <span>Remark</span>
            <span>Amount</span>
          </div>

          {transactions.length === 0 ? (
            <div className="h-32 flex items-center justify-center text-gray-500 text-sm">
              No transactions found
            </div>
          ) : (
            transactions.map((item) => (
              <div key={item.id}>
                Row
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}