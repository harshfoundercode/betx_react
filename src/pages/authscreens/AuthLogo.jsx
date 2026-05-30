import { Crown } from "lucide-react";

export default function AuthLogo() {
  return (
    <div className="mb-6">

      {/* Logo + Title */}
      <div className="flex items-center justify-center gap-3">
        <div
          className="
            w-14 h-14
            rounded-2xl
            bg-gradient-to-br
            from-yellow-400
            to-yellow-600
            flex items-center justify-center
            shadow-[0_0_30px_rgba(255,184,0,.4)]
          "
        >
          <Crown
            size={28}
            className="text-black"
          />
        </div>

        <h1
          className="
            text-3xl
            font-black
            tracking-wide
            bg-linear-to-r
            from-yellow-300
            via-yellow-400
            to-yellow-500
            bg-clip-text
            text-transparent
          "
        >
          BETX
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-400 text-xs mt-2">
        INDIA'S PREMIUM CASINO
      </p>

    </div>
  );
}