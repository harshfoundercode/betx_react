import { useState } from "react";
import {
  ArrowLeft,
  Wallet,
  Plus,
  UserX,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AddAccountModal from "../pages/payment/AddAccount";
import AccountCard from "../pages/payment/AccountCard";
import TransactionCard from "../pages/payment/TransactionCard";

export default function WithdrawScreen() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("accounts");

  const [showModal, setShowModal] =
    useState(false);

  const [accounts, setAccounts] =
    useState([]);

  const [transactions] = useState([
    {
      id: 1,
      amount: 5000,
      date: "Today",
      status: "Success",
    },
    {
      id: 2,
      amount: 2500,
      date: "Yesterday",
      status: "Pending",
    },
    {
      id: 3,
      amount: 1500,
      date: "2 Days Ago",
      status: "Rejected",
    },
  ]);

  const addAccount = (account) => {
    setAccounts((prev) => [
      ...prev,
      account,
    ]);
  };

  const deleteAccount = (id) => {
    setAccounts((prev) =>
      prev.filter((x) => x.id !== id)
    );
  };

  return (
    <>
      <AddAccountModal
        open={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onSave={addAccount}
      />

      <div className=" bg-black text-white pb-2">
        <div className="max-w-xl mx-auto px-4 py-4">

          {/* Header */}
          <div className="relative flex items-center justify-center mb-4">
           

            <h2 className="text-sm font-bold tracking-[3px]">
              WITHDRAW
            </h2>
          </div>

          {/* Balance */}
          <div
            className="
              rounded-[16px]
              border border-yellow-500/10
              bg-gradient-to-b
              from-[#0F0C05]
              to-[#090909]
              p-3
              mb-3
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold tracking-[2px] text-yellow-700 mb-2">
                  AVAILABLE BALANCE
                </p>

                <h3 className="text-2xl font-black text-yellow-400">
                  ₹0
                </h3>
              </div>

              <div
                className="
                  w-10 h-10
                  rounded-xl
                  bg-yellow-500/10
                  border border-yellow-500/20
                  flex items-center justify-center
                "
              >
                <Wallet
                  size={18}
                  className="text-yellow-400"
                />
              </div>
            </div>
          </div>

          {/* Add Account */}
          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
              w-full
              h-10
              rounded-[14px]
              border border-yellow-500/10
              bg-linear-to-b
              from-[#111]
              to-[#0C0C0C]
              flex items-center justify-between
              px-3
              mb-3
            "
          >
            <span className="text-xs font-semibold tracking-[1px]">
              + ADD BANK / UPI ACCOUNT
            </span>

            <div
              className="
                w-6 h-6
                rounded-lg
                border border-yellow-500/20
                bg-yellow-500/10
                flex items-center justify-center
              "
            >
              <Plus
                size={12}
                className="text-yellow-400"
              />
            </div>
          </button>

          {/* Tabs */}
          <div
            className="
              rounded-[14px]
              overflow-hidden
              border border-yellow-500/10
              bg-[#111]
              flex
              mb-4
            "
          >
            <button
              onClick={() =>
                setActiveTab(
                  "accounts"
                )
              }
              className={`
                flex-1
                h-9
                text-[11px]
                font-bold
                ${
                  activeTab ===
                  "accounts"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "text-gray-500"
                }
              `}
            >
              ACCOUNTS (
              {accounts.length})
            </button>

            <button
              onClick={() =>
                setActiveTab(
                  "transactions"
                )
              }
              className={`
                flex-1
                h-9
                text-[11px]
                font-bold
                ${
                  activeTab ===
                  "transactions"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "text-gray-500"
                }
              `}
            >
              TRANSACTIONS (
              {transactions.length})
            </button>
          </div>

          {/* Accounts */}
          {activeTab ===
          "accounts" ? (
            accounts.length ===
            0 ? (
              <div className="flex flex-col items-center justify-center py-6">
                <div
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-white/5
                    flex items-center justify-center
                    mb-3
                  "
                >
                  <UserX
                    size={18}
                    className="text-gray-500"
                  />
                </div>

                <p className="text-xs text-gray-500 mb-3">
                  No accounts added yet
                </p>

                <button
                  onClick={() =>
                    setShowModal(
                      true
                    )
                  }
                  className="
                    px-4
                    h-8
                    rounded-lg
                    border border-yellow-500/20
                    bg-yellow-500/10
                    text-yellow-400
                    text-xs
                    font-bold
                  "
                >
                  + ADD ACCOUNT
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {accounts.map(
                  (item) => (
                    <AccountCard
                      key={item.id}
                      account={item}
                      onDelete={
                        deleteAccount
                      }
                    />
                  )
                )}
              </div>
            )
          ) : (
            <div className="space-y-2">
              {transactions.map(
                (item) => (
                  <TransactionCard
                    key={item.id}
                    item={item}
                  />
                )
              )}
            </div>
          )}

          {/* Note */}
          <div className="mt-4">
            <p className="text-[11px] text-orange-500">
              <span className="font-bold">
                NOTE:
              </span>{" "}
              Withdrawal amount must
              be ≤ available
              balance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}