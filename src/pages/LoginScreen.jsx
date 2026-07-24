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
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import apis from '../utils/apis';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    
    if (!formData.email || !formData.password) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(apis.login, formData);
      localStorage.setItem('token', response.data.token);
      alert('Login Successful!');
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center mb-8">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-blue-500 font-semibold hover:underline"
          >
            Create One
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;