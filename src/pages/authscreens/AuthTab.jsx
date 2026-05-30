import { LogIn, UserPlus } from "lucide-react";

export default function AuthTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div
      className="
        relative
        p-1
        rounded-[18px]
        bg-linear-to-r
        from-[#1B1B1F]
        to-[#202126]
        border
        border-white/5
      "
    >
      {/* Active Tab */}
      <div
        className={`
          absolute
          top-[4px]
          bottom-[4px]
          w-[calc(50%-4px)]
          rounded-[12px]
          bg-linear-to-b
          from-[#E38508]
          to-[#F9B41C]
          shadow-[0_0_20px_rgba(245,158,11,0.35)]
          transition-all
          duration-300
          ease-out
          ${
            activeTab === "login"
              ? "left-[4px]"
              : "left-[calc(50%)]"
          }
        `}
      />

      <div className="relative z-10 grid grid-cols-2">
        {/* Login */}
        <button
          type="button"
          onClick={() =>
            setActiveTab("login")
          }
          className={`
            h-9
            flex
            items-center
            justify-center
            gap-1.5
            text-xs
            font-bold
            tracking-wide
            transition-colors
            ${
              activeTab === "login"
                ? "text-black"
                : "text-gray-500"
            }
          `}
        >
          <LogIn size={13} />
          SIGN IN
        </button>

        {/* Register */}
        <button
          type="button"
          onClick={() =>
            setActiveTab("register")
          }
          className={`
            h-9
            flex
            items-center
            justify-center
            gap-1.5
            text-xs
            font-bold
            tracking-wide
            transition-colors
            ${
              activeTab === "register"
                ? "text-black"
                : "text-gray-500"
            }
          `}
        >
          <UserPlus size={13} />
          REGISTER
        </button>
      </div>
    </div>
  );
}