export default function TransactionCard({
  item,
}) {
  const statusColor =
    item.status === "Success"
      ? "text-green-400 bg-green-500/10"
      : item.status ===
        "Pending"
      ? "text-yellow-400 bg-yellow-500/10"
      : "text-red-400 bg-red-500/10";

  return (
    <div className="rounded-xl bg-[#111] border border-white/5 p-3">

      <div className="flex justify-between items-start">

        <div>
          <h4 className="text-xs font-semibold">
            ₹{item.amount}
          </h4>

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
            ${statusColor}
          `}
        >
          {item.status}
        </span>

      </div>

    </div>
  );
}