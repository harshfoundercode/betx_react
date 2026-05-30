import { Trash2 } from "lucide-react";

export default function AccountCard({
  account,
  onDelete,
}) {
  return (
    <div className="rounded-xl bg-[#111] border border-white/5 p-3">

      <div className="flex justify-between items-start">

        <div>
          <h4 className="text-xs font-semibold">
            {account.holderName}
          </h4>

          {account.type ===
          "upi" ? (
            <p className="text-[10px] text-gray-400 mt-1">
              {account.upiId}
            </p>
          ) : (
            <>
              <p className="text-[10px] text-gray-400 mt-1">
                {
                  account.bankName
                }
              </p>

              <p className="text-[10px] text-gray-500">
                ****
                {account.accountNumber?.slice(
                  -4
                )}
              </p>
            </>
          )}
        </div>

        <button
          onClick={() =>
            onDelete(account.id)
          }
          className="text-red-400"
        >
          <Trash2 size={14} />
        </button>

      </div>
    </div>
  );
}