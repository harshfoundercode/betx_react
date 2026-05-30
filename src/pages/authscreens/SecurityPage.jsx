import {
  ShieldCheck,
} from "lucide-react";

export default function SecurityBanner() {
  return (
    <div
      className="
      mt-5
      rounded-2xl
      border
      border-green-500/20
      bg-green-500/10
      p-2
      flex
      items-center
      gap-3
    "
    >
      <ShieldCheck
        size={18}
        className="text-green-400"
      />

      <div>
        <p className="text-green-400 text-xs font-semibold">
          256-BIT SSL ENCRYPTEDD
        </p>

       
      </div>
    </div>
  );
}