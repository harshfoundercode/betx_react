// import { useState } from "react";
// import { X } from "lucide-react";

// export default function AddAccountModal({
//   open,
//   onClose,
//   onSave,
// }) {
//   const [type, setType] =
//     useState("upi");

//   const [form, setForm] = useState({
//     holderName: "",
//     accountNumber: "",
//     ifsc: "",
//     bankName: "",
//     upiId: "",
//   });

//   if (!open) return null;

//   const handleSave = () => {
//     if (
//       type === "upi" &&
//       (!form.upiId ||
//         !form.holderName)
//     ) {
//       return;
//     }

//     if (
//       type === "bank" &&
//       (!form.holderName ||
//         !form.accountNumber ||
//         !form.ifsc ||
//         !form.bankName)
//     ) {
//       return;
//     }

//     onSave({
//       id: Date.now(),
//       type,
//       ...form,
//     });

//     setForm({
//       holderName: "",
//       accountNumber: "",
//       ifsc: "",
//       bankName: "",
//       upiId: "",
//     });

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
//       <div className="w-full max-w-sm bg-[#101010] border border-yellow-500/10 rounded-2xl p-4">

//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-bold text-sm">
//             Add Account
//           </h3>

//           <button
//             onClick={onClose}
//           >
//             <X size={16} />
//           </button>
//         </div>

//         <div className="flex gap-2 mb-4">
//           <button
//             onClick={() =>
//               setType("upi")
//             }
//             className={`flex-1 h-8 rounded-lg text-xs font-semibold ${
//               type === "upi"
//                 ? "bg-yellow-500 text-black"
//                 : "bg-[#1B1B1B]"
//             }`}
//           >
//             UPI
//           </button>

//           <button
//             onClick={() =>
//               setType("bank")
//             }
//             className={`flex-1 h-8 rounded-lg text-xs font-semibold ${
//               type === "bank"
//                 ? "bg-yellow-500 text-black"
//                 : "bg-[#1B1B1B]"
//             }`}
//           >
//             BANK
//           </button>
//         </div>

//         {type === "upi" ? (
//           <div className="space-y-3">

//             <input
//               placeholder="UPI ID"
//               value={form.upiId}
              
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   upiId:
//                     e.target.value,
//                 })
//               }
//               className="w-full h-10 rounded-xl bg-[#1A1A1A] px-3 text-sm outline-none"
//             />

//             <input
//               placeholder="Holder Name"
//               value={
//                 form.holderName
//               }
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   holderName:
//                     e.target.value,
//                 })
//               }
//               className="w-full h-10 rounded-xl bg-[#1A1A1A] px-3 text-sm outline-none"
//             />
//           </div>
//         ) : (
//           <div className="space-y-3">

//             <input
//               placeholder="Holder Name"
//               value={
//                 form.holderName
//               }
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   holderName:
//                     e.target.value,
//                 })
//               }
//               className="w-full h-10 rounded-xl bg-[#1A1A1A] px-3 text-sm outline-none"
//             />

//             <input
//               placeholder="Account Number"
//               value={
//                 form.accountNumber
//               }
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   accountNumber:
//                     e.target.value,
//                 })
//               }
//               className="w-full h-10 rounded-xl bg-[#1A1A1A] px-3 text-sm outline-none"
//             />

//             <input
//               placeholder="IFSC Code"
//               value={form.ifsc}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   ifsc:
//                     e.target.value,
//                 })
//               }
//               className="w-full h-10 rounded-xl bg-[#1A1A1A] px-3 text-sm outline-none"
//             />

//             <input
//               placeholder="Bank Name"
//               value={
//                 form.bankName
//               }
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   bankName:
//                     e.target.value,
//                 })
//               }
//               className="w-full h-10 rounded-xl bg-[#1A1A1A] px-3 text-sm outline-none"
//             />

//           </div>
//         )}

//         <button
//           onClick={handleSave}
//           className="w-full h-10 rounded-xl bg-yellow-500 text-black font-semibold text-sm mt-4"
//         >
//           Save Account
//         </button>

//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { X } from "lucide-react";

export default function AddAccountModal({
  open,
  onClose,
  onSave,
}) {
  const [type, setType] = useState("upi");

  const [form, setForm] = useState({
    holderName: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    upiId: "",
  });

  if (!open) return null;

  const inputClass = `
    w-full
    h-10
    rounded-xl
    bg-[#1A1A1A]
    px-3

    text-sm
    text-white

    placeholder:text-white/60

    border
    border-white/10

    outline-none

    focus:border-yellow-500/30
    focus:ring-1
    focus:ring-yellow-500/20

    transition-all
  `;

  const handleSave = () => {
    if (
      type === "upi" &&
      (!form.upiId.trim() ||
        !form.holderName.trim())
    ) {
      alert("Please fill all fields");
      return;
    }

    if (
      type === "bank" &&
      (!form.holderName.trim() ||
        !form.accountNumber.trim() ||
        !form.ifsc.trim() ||
        !form.bankName.trim())
    ) {
      alert("Please fill all fields");
      return;
    }

    onSave({
      id: Date.now(),
      type,
      ...form,
    });

    setForm({
      holderName: "",
      accountNumber: "",
      ifsc: "",
      bankName: "",
      upiId: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-999 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">

      <div
        className="
          w-full
          max-w-xl

          bg-[#101010]
          text-white

          border
          border-yellow-500/10

          rounded-2xl
          p-4
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm text-white">
            Add Account
          </h3>

          <button
            onClick={onClose}
            className="
              text-white/70
              hover:text-white
              transition-colors
            "
          >
            <X size={16} />
          </button>
        </div>

        {/* Type Tabs */}

        <div className="flex gap-2 mb-4">

          <button
            onClick={() => setType("upi")}
            className={`
              flex-1
              h-8
              rounded-lg
              text-xs
              font-semibold
              transition-all

              ${
                type === "upi"
                  ? "bg-yellow-500 text-black"
                  : "bg-[#1B1B1B] text-gray-400"
              }
            `}
          >
            UPI
          </button>

          <button
            onClick={() => setType("bank")}
            className={`
              flex-1
              h-8
              rounded-lg
              text-xs
              font-semibold
              transition-all

              ${
                type === "bank"
                  ? "bg-yellow-500 text-black"
                  : "bg-[#1B1B1B] text-gray-400"
              }
            `}
          >
            BANK
          </button>

        </div>

        {/* UPI FORM */}

        {type === "upi" ? (
          <div className="space-y-3">

            <input
              type="text"
              placeholder="UPI ID"
              value={form.upiId}
              autoComplete="off"
              onChange={(e) =>
                setForm({
                  ...form,
                  upiId: e.target.value,
                })
              }
              className={inputClass}
            />

            <input
              type="text"
              placeholder="Holder Name"
              value={form.holderName}
              autoComplete="off"
              onChange={(e) =>
                setForm({
                  ...form,
                  holderName:
                    e.target.value,
                })
              }
              className={inputClass}
            />

          </div>
        ) : (
          <div className="space-y-3">

            <input
              type="text"
              placeholder="Holder Name"
              value={form.holderName}
              autoComplete="off"
              onChange={(e) =>
                setForm({
                  ...form,
                  holderName:
                    e.target.value,
                })
              }
              className={inputClass}
            />

            <input
              type="text"
              placeholder="Account Number"
              value={form.accountNumber}
              autoComplete="off"
              onChange={(e) =>
                setForm({
                  ...form,
                  accountNumber:
                    e.target.value,
                })
              }
              className={inputClass}
            />

            <input
              type="text"
              placeholder="IFSC Code"
              value={form.ifsc}
              autoComplete="off"
              onChange={(e) =>
                setForm({
                  ...form,
                  ifsc: e.target.value,
                })
              }
              className={inputClass}
            />

            <input
              type="text"
              placeholder="Bank Name"
              value={form.bankName}
              autoComplete="off"
              onChange={(e) =>
                setForm({
                  ...form,
                  bankName:
                    e.target.value,
                })
              }
              className={inputClass}
            />

          </div>
        )}

        {/* Save Button */}

        <button
          onClick={handleSave}
          className="
            w-full
            h-10
            rounded-xl

            bg-yellow-500
            hover:bg-yellow-400

            text-black
            font-semibold
            text-sm

            transition-all

            mt-4
          "
        >
          Save Account
        </button>

      </div>

    </div>
  );
}