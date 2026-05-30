import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ArrowRight,
} from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const getStrength = () => {
    const pass = form.password;

    if (pass.length < 4)
      return {
        width: "25%",
        color: "bg-red-500",
        text: "Weak",
      };

    if (pass.length < 8)
      return {
        width: "50%",
        color: "bg-orange-500",
        text: "Medium",
      };

    return {
      width: "100%",
      color: "bg-green-500",
      text: "Strong",
    };
  };

  const strength = getStrength();

  return (
    <form
      autoComplete="off"
      className="space-y-5"
    >
      {/* Autofill Hack */}
      <input
        type="text"
        autoComplete="username"
        className="hidden"
      />

      <input
        type="password"
        autoComplete="current-password"
        className="hidden"
      />

      {/* Username */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <User
            size={14}
            className="text-[#D4A017]"
          />

          <span className="text-xs font-bold tracking-[1px] text-gray-400 uppercase">
            Username
          </span>
        </div>

        <div className="group relative">
          <User
            size={18}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              group-focus-within:text-[#F8B400]
              transition-colors
            "
          />

          <input
            type="text"
            autoComplete="off"
            placeholder="Choose username"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
            className="
              w-full
              h-[50px]
              rounded-[18px]
              bg-[#2A344B]
              border
              border-[#3A4765]
              pl-14
              pr-4
              text-white
              text-sm
              font-medium

              placeholder:text-gray-500

              focus:outline-none
              focus:border-[#F8B400]
              focus:bg-[#1F273A]

              transition-all
              duration-300

              focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]

              [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#2A344B]
              [&:-webkit-autofill]:[-webkit-text-fill-color:white]
            "
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Mail
            size={14}
            className="text-[#D4A017]"
          />

          <span className="text-xs font-bold tracking-[1px] text-gray-400 uppercase">
            Email
          </span>
        </div>

        <div className="group relative">
          <Mail
            size={18}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              group-focus-within:text-[#F8B400]
              transition-colors
            "
          />

          <input
            type="email"
            autoComplete="off"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="
              w-full
              h-[50px]
              rounded-[18px]
              bg-[#2A344B]
              border
              border-[#3A4765]
              pl-14
              pr-4
              text-white
              text-sm
              font-medium

              placeholder:text-gray-500

              focus:outline-none
              focus:border-[#F8B400]
              focus:bg-[#1F273A]

              transition-all
              duration-300

              focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]

              [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#2A344B]
              [&:-webkit-autofill]:[-webkit-text-fill-color:white]
            "
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Lock
            size={14}
            className="text-[#D4A017]"
          />

          <span className="text-xs font-bold tracking-[1px] text-gray-400 uppercase">
            Password
          </span>
        </div>

        <div className="group relative">
          <Lock
            size={18}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              group-focus-within:text-[#F8B400]
              transition-colors
            "
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            autoComplete="new-password"
            placeholder="Create password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="
              w-full
              h-[50px]
              rounded-[18px]
              bg-[#2A344B]
              border
              border-[#3A4765]
              pl-14
              pr-14
              text-white
              text-sm
              font-medium

              placeholder:text-gray-500

              focus:outline-none
              focus:border-[#F8B400]
              focus:bg-[#1F273A]

              transition-all
              duration-300

              focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]

              [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#2A344B]
              [&:-webkit-autofill]:[-webkit-text-fill-color:white]
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-gray-500
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {/* Strength */}
        <div className="mt-3">
          <div className="h-2 rounded-full bg-[#1C2436] overflow-hidden">
            <div
              className={`h-full ${strength.color}`}
              style={{
                width: strength.width,
              }}
            />
          </div>

          <p className="text-[11px] text-gray-400 mt-1">
            Password Strength:
            {" "}
            {strength.text}
          </p>
        </div>
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="
          w-full
          h-[50px]
          rounded-[18px]

          bg-gradient-to-r
            from-[#E38508]
          to-[#F9B41C]

          text-black
          text-sm
          font-black
          tracking-[1px]

          shadow-[0_0_35px_rgba(245,158,11,.35)]

          transition-all
          duration-300

          hover:shadow-[0_0_45px_rgba(245,158,11,.55)]
        "
      >
        <span className="flex items-center justify-center gap-2">
          <UserPlus size={18} />
          CREATE ACCOUNT
          <ArrowRight size={18} />
        </span>
      </button>
    </form>
  );
}