import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Shield, Sun } from 'lucide-react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setLoading(true);
    // Static registration - no API
    setTimeout(() => {
      console.log('Registration attempted with:', { username, password });
      setLoading(false);
      // You can add navigation here after static check
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
          <Link to="/login" className="text-gray-400 font-semibold pb-3 hover:text-gray-300 transition">
            SIGN IN
          </Link>
          <button className="text-yellow-400 font-semibold pb-3 border-b-2 border-yellow-400">
            REGISTER
          </button>
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

        {/* Registration Form */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded-xl text-sm text-center">
                {error}
              </div>
            )}

            {/* Username Field */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">USERNAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-900/80 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                placeholder="Choose a username"
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
                  placeholder="Create a password"
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

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">CONFIRM PASSWORD</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-gray-900/80 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
            </button>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  Login →
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

export default RegisterPage;