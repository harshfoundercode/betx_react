import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Shield, Sun } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Static login - no API
    setTimeout(() => {
      console.log('Login attempted with:', { username, password });
      setLoading(false);
      // You can add navigation here after static check
      // if (username === 'harsh') navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <div className="text-5xl font-bold bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            BETX
          </div>
          <p className="text-gray-400 text-sm mt-2 tracking-wide">INDIA'S PREMIUM CASINO</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-700">
          <button className="text-yellow-400 font-semibold pb-3 border-b-2 border-yellow-400">
            SIGN IN
          </button>
          <Link to="/register" className="text-gray-400 font-semibold pb-3 hover:text-gray-300 transition">
            REGISTER
          </Link>
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-full">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-300">256-BIT SSL ENCRYPTED</span>
          </div>
          <div className="bg-green-500/20 px-3 py-1.5 rounded-full">
            <span className="text-xs text-green-400 font-semibold">VERIFIED ✓</span>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">USERNAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-900/80 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">PASSWORD</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-900/80 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button type="button" className="text-yellow-400 text-sm hover:text-yellow-300 transition">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'LOGGING IN...' : 'LOGIN TO PLAY →'}
            </button>

            {/* Create Account Link */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                New player?{' '}
                <Link to="/register" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  Create Account →
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>Secure</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>Instant</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>Fair Play</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LoginPage;