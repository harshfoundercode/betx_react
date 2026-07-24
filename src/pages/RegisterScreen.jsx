// import { useState } from "react";
// import {
//   User,
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   UserPlus,
//   ArrowRight,
// } from "lucide-react";

// export default function RegisterForm() {
//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const getStrength = () => {
//     const pass = form.password;

//     if (pass.length < 4)
//       return {
//         width: "25%",
//         color: "bg-red-500",
//         text: "Weak",
//       };

//     if (pass.length < 8)
//       return {
//         width: "50%",
//         color: "bg-orange-500",
//         text: "Medium",
//       };

//     return {
//       width: "100%",
//       color: "bg-green-500",
//       text: "Strong",
//     };
//   };

//   const strength = getStrength();

//   return (
//     <form
//       autoComplete="off"
//       className="space-y-5"
//     >
//       {/* Autofill Hack */}
//       <input
//         type="text"
//         autoComplete="username"
//         className="hidden"
//       />

//       <input
//         type="password"
//         autoComplete="current-password"
//         className="hidden"
//       />

//       {/* Username */}
//       <div>
//         <div className="flex items-center gap-2 mb-2">
//           <User
//             size={14}
//             className="text-[#D4A017]"
//           />

//           <span className="text-xs font-bold tracking-[1px] text-gray-400 uppercase">
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
//               group-focus-within:text-[#F8B400]
//               transition-colors
//             "
//           />

//           <input
//             type="text"
//             autoComplete="off"
//             placeholder="Choose username"
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
//               text-sm
//               font-medium

//               placeholder:text-gray-500

//               focus:outline-none
//               focus:border-[#F8B400]
//               focus:bg-[#1F273A]

//               transition-all
//               duration-300

//               focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]

//               [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#2A344B]
//               [&:-webkit-autofill]:[-webkit-text-fill-color:white]
//             "
//           />
//         </div>
//       </div>

//       {/* Email */}
//       <div>
//         <div className="flex items-center gap-2 mb-2">
//           <Mail
//             size={14}
//             className="text-[#D4A017]"
//           />

//           <span className="text-xs font-bold tracking-[1px] text-gray-400 uppercase">
//             Email
//           </span>
//         </div>

//         <div className="group relative">
//           <Mail
//             size={18}
//             className="
//               absolute
//               left-5
//               top-1/2
//               -translate-y-1/2
//               text-gray-500
//               group-focus-within:text-[#F8B400]
//               transition-colors
//             "
//           />

//           <input
//             type="email"
//             autoComplete="off"
//             placeholder="Enter email"
//             value={form.email}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 email: e.target.value,
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
//               text-sm
//               font-medium

//               placeholder:text-gray-500

//               focus:outline-none
//               focus:border-[#F8B400]
//               focus:bg-[#1F273A]

//               transition-all
//               duration-300

//               focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]

//               [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#2A344B]
//               [&:-webkit-autofill]:[-webkit-text-fill-color:white]
//             "
//           />
//         </div>
//       </div>

//       {/* Password */}
//       <div>
//         <div className="flex items-center gap-2 mb-2">
//           <Lock
//             size={14}
//             className="text-[#D4A017]"
//           />

//           <span className="text-xs font-bold tracking-[1px] text-gray-400 uppercase">
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
//               group-focus-within:text-[#F8B400]
//               transition-colors
//             "
//           />

//           <input
//             type={
//               showPassword
//                 ? "text"
//                 : "password"
//             }
//             autoComplete="new-password"
//             placeholder="Create password"
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
//               text-sm
//               font-medium

//               placeholder:text-gray-500

//               focus:outline-none
//               focus:border-[#F8B400]
//               focus:bg-[#1F273A]

//               transition-all
//               duration-300

//               focus:shadow-[0_0_0_1px_rgba(248,180,0,0.25),0_0_25px_rgba(248,180,0,0.15)]

//               [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#2A344B]
//               [&:-webkit-autofill]:[-webkit-text-fill-color:white]
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
//             "
//           >
//             {showPassword ? (
//               <EyeOff size={18} />
//             ) : (
//               <Eye size={18} />
//             )}
//           </button>
//         </div>

//         {/* Strength */}
//         <div className="mt-3">
//           <div className="h-2 rounded-full bg-[#1C2436] overflow-hidden">
//             <div
//               className={`h-full ${strength.color}`}
//               style={{
//                 width: strength.width,
//               }}
//             />
//           </div>

//           <p className="text-[11px] text-gray-400 mt-1">
//             Password Strength:
//             {" "}
//             {strength.text}
//           </p>
//         </div>
//       </div>

//       {/* Register Button */}
//       <button
//         type="submit"
//         className="
//           w-full
//           h-[50px]
//           rounded-[18px]

//           bg-gradient-to-r
//             from-[#E38508]
//           to-[#F9B41C]

//           text-black
//           text-sm
//           font-black
//           tracking-[1px]

//           shadow-[0_0_35px_rgba(245,158,11,.35)]

//           transition-all
//           duration-300

//           hover:shadow-[0_0_45px_rgba(245,158,11,.55)]
//         "
//       >
//         <span className="flex items-center justify-center gap-2">
//           <UserPlus size={18} />
//           CREATE ACCOUNT
//           <ArrowRight size={18} />
//         </span>
//       </button>
//     </form>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaLock, FaGift } from 'react-icons/fa';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    country_code: '+91',
    password: '',
    password_confirmation: '',
    referral_code: ''
  });

  const countryCodes = ['+1', '+44', '+91', '+61', '+86', '+81'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    // Validation
    const newErrors = {};
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://your-api-url.com/api/register', formData);
      alert('Registration Successful! Please login.');
      navigate('/login');
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mb-8">Join us today!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>

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
                placeholder="Enter email address"
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Country Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country Code <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {countryCodes.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setFormData({ ...formData, country_code: code })}
                  className={`px-4 py-1.5 rounded-full text-sm border transition ${
                    formData.country_code === code
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
            {errors.country_code && <p className="text-red-500 text-sm mt-1">{errors.country_code}</p>}
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
                placeholder="Enter password (min 6 characters)"
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password_confirmation ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              />
            </div>
            {errors.password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>}
          </div>

          {/* Referral Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Referral Code (Optional)
            </label>
            <div className="relative">
              <FaGift className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="referral_code"
                value={formData.referral_code}
                onChange={handleChange}
                placeholder="Enter referral code"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Registering...' : 'Create Account'}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;