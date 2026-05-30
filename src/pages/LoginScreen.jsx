// import { useState } from "react";
// import {
//   User,
//   Lock,
//   Eye,
//   EyeOff,
//   LogIn,
//   ArrowRight,
// } from "lucide-react";

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!form.username.trim()) {
//       newErrors.username = "Username required";
//     }

//     if (!form.password.trim()) {
//       newErrors.password = "Password required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     console.log(form);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-5"
//     >
//       {/* Username */}
//       <div>
//         <div className="flex items-center gap-2 mb-2">
//           <User
//             size={14}
//             className="text-[#D4A017]"
//           />

//           <span
//             className="
//               text-xs
//               font-bold
//               tracking-[1px]
//               text-gray-400
//               uppercase
//             "
//           >
//             Username
//           </span>
//         </div>

//         <div className="group relative">
//           <User
//             size={18}

//             className="
//               absolute
//               left-5
//               top-1/2
//               -translate-y-1/2
//               text-gray-500

//               transition-colors
//               duration-300
//               group-focus-within:text-[#F8B400]
//             "
//           />

//           <input
//             type="text"
//             placeholder="Enter username"
//             autoComplete="off"
//             value={form.username}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 username: e.target.value,
//               })
//             }
//             className="
//               w-full
//               h-[50px]
//               rounded-[18px]
//               bg-[#2A344B]
//               border
//               border-[#3A4765]
//               pl-14
//               pr-4
//               text-white
//               font-medium

//               placeholder:text-gray-500

//               transition-all
//               duration-300

//               focus:outline-none
//               focus:border-[#F8B400]
//               focus:bg-[#1F273A]

//               focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]
//             "
//           />
//         </div>

//         {errors.username && (
//           <p className="text-red-400 text-xs mt-1">
//             {errors.username}
//           </p>
//         )}
//       </div>

//       {/* Password */}
//       <div>
//         <div className="flex items-center gap-2 mb-2">
//           <Lock
//             size={14}
//             className="text-[#D4A017]"
//           />

//           <span
//             className="
//               text-xs
//               font-bold
//               tracking-[1px]
//               text-gray-400
//               uppercase
//             "
//           >
//             Password
//           </span>
//         </div>

//         <div className="group relative">
//           <Lock
//             size={18}
//             className="
//               absolute
//               left-5
//               top-1/2
//               -translate-y-1/2
//               text-gray-500
//               transition-colors
//               duration-300
//               group-focus-within:text-[#F8B400]
//             "
//           />

//           <input
//             type={
//               showPassword
//                 ? "text"
//                 : "password"
//             }
//             placeholder="••••••"
//             autoComplete="off"
//             value={form.password}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 password: e.target.value,
//               })
//             }
//             className="
//               w-full
//               h-[50px]
//               rounded-[18px]
//               bg-[#2A344B]
//               border
//               border-[#3A4765]
//               pl-14
//               pr-14
//               text-white
//               font-medium

//               placeholder:text-gray-500

//               transition-all
//               duration-300

//               focus:outline-none
//               focus:border-[#F8B400]
//               focus:bg-[#1F273A]

//               focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]
//             "
//           />

//           <button
//             type="button"
//             onClick={() =>
//               setShowPassword(
//                 !showPassword
//               )
//             }
//             className="
//               absolute
//               right-5
//               top-1/2
//               -translate-y-1/2
//               text-gray-500
//               hover:text-gray-300
//             "
//           >
//             {showPassword ? (
//               <EyeOff size={18} />
//             ) : (
//               <Eye size={18} />
//             )}
//           </button>
//         </div>

//         {errors.password && (
//           <p className="text-red-400 text-xs mt-1">
//             {errors.password}
//           </p>
//         )}
//       </div>

//       {/* Forgot Password */}
//       <div className="flex justify-end">
//         <button
//           type="button"
//           className="
//             text-[#D4A017]
//             text-xs
//             font-semibold
//             hover:text-yellow-400
//             transition-colors
//           "
//         >
//           Forgot Password?
//         </button>
//       </div>

//       {/* Login Button */}
//       <button
//         type="submit"
//         className="
//           relative
//           overflow-hidden
//           w-full
//           h-[50px]
//           rounded-[20px]

//           bg-gradient-to-r
//           from-[#F59E0B]
//           to-[#FBBF24]

//           text-black
//           font-black
//           tracking-[1px]


//           shadow-[0_0_35px_rgba(245,158,11,.35)]

//           transition-all
//           duration-300

//           hover:shadow-[0_0_45px_rgba(245,158,11,.55)]
//           hover:scale-[1.01]
//         "
//       >
//         <span className="flex items-center justify-center gap-3">
//           <LogIn size={20} />
//           LOGIN TO PLAY
//           <ArrowRight size={20} />
//         </span>
//       </button>

//       {/* Create Account */}
//       <div className="text-center">
//         <span className="text-gray-500 text-[11px]">
//           New player?
//         </span>

//         <button
//           type="button"
//           className="
//       ml-1
//       text-yellow-400
//       text-[11px]
//       font-semibold
//       hover:text-yellow-300
//     "
//         >
//           Create Account →
//         </button>
//       </div>
//     </form>
//   );
// }
import { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  ArrowRight,
} from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username required";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="space-y-5"
    >
      {/* Chrome Autofill Hack */}
      <input
        type="text"
        name="fake_username"
        autoComplete="username"
        className="hidden"
      />

      <input
        type="password"
        name="fake_password"
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

          <span
            className="
              text-xs
              font-bold
              tracking-[1px]
              text-gray-400
              uppercase
            "
          >
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
              transition-colors
              duration-300
              group-focus-within:text-[#F8B400]
            "
          />

          <input
            type="text"
            name="login_user"
            autoComplete="new-password"
            spellCheck={false}
            placeholder="Enter username"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username:
                  e.target.value,
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

              transition-all
              duration-300

              focus:outline-none
              focus:border-[#F8B400]
              focus:bg-[#1F273A]

              focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]

              [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#2A344B]
              [&:-webkit-autofill]:[-webkit-text-fill-color:white]
            "
          />
        </div>

        {errors.username && (
          <p className="text-red-400 text-xs mt-1">
            {errors.username}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Lock
            size={14}
            className="text-[#D4A017]"
          />

          <span
            className="
              text-xs
              font-bold
              tracking-[1px]
              text-gray-400
              uppercase
            "
          >
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
              transition-colors
              duration-300
              group-focus-within:text-[#F8B400]
            "
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="login_pass"
            autoComplete="new-password"
            spellCheck={false}
            placeholder="••••••"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
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

              transition-all
              duration-300

              focus:outline-none
              focus:border-[#F8B400]
              focus:bg-[#1F273A]

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
              hover:text-gray-300
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="text-red-400 text-xs mt-1">
            {errors.password}
          </p>
        )}
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <button
          type="button"
          className="
            text-[#D4A017]
            text-xs
            font-semibold
            hover:text-yellow-400
            transition-colors
          "
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="
          w-full
          h-12.5
          rounded-[18px]

          bg-linear-to-r
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
          <LogIn size={18} />
          LOGIN TO PLAY
          <ArrowRight size={18} />
        </span>
      </button>

      {/* Register Link */}
      <div className="text-center">
        <span className="text-gray-500 text-[11px]">
          New player?
        </span>

        <button
          type="button"
          className="
            ml-1
            text-yellow-400
            text-[11px]
            font-semibold
            hover:text-yellow-300
          "
        >
          Create Account →
        </button>
      </div>
    </form>
  );
}