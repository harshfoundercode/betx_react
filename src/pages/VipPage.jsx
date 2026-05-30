import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home, CreditCard, Crown, User, ArrowLeft, Flame, Users, Zap,
  TrendingUp, Award, Star, CircleDollarSign
} from 'lucide-react';

// Re-using the same game data structure from HomePage for consistency
// In the future, this could be fetched from an API
const ALL_GAMES_DATA = {
  liveGames: [
    { id: 1, name: "Aviator", icon: "🚀", players: "24.1K playing", multiplier: "16.40x", badge: "LIVE", tag: "TRENDING", bg: "from-emerald-700/80 to-emerald-500/60" },
    { id: 2, name: "Ludo", icon: "🎲", players: "12.3K playing", multiplier: "15.13x", badge: "HOT", tag: "POPULAR", bg: "from-orange-700/80 to-orange-500/60" },
    { id: 3, name: "Andar Bahar", icon: "🃏", players: "8.7K playing", multiplier: "14.22x", badge: "LIVE", tag: "NEW", bg: "from-purple-700/80 to-purple-500/60" },
    { id: 4, name: "Roulette", icon: "🎡", players: "11.2K playing", multiplier: "18.99x", badge: "LIVE", tag: "CLASSIC", bg: "from-red-700/80 to-red-500/60" },
  ],
  originals: [
    { id: 1, name: "Tower Rush", icon: "🗼", players: "18.6K playing", badge: "BETX ORIGINAL", bg: "from-[#441C75] to-[#441C75]" },
    { id: 2, name: "Chicken Road", icon: "🐔", players: "12.1K playing", badge: "BETX ORIGINAL", bg: "from-[#6E1B3A] to-[#6E1B3A]" },
    { id: 3, name: "Magic Wheel", icon: "🎡", players: "9.9K playing", badge: "BETX ORIGINAL", bg: "from-[#16445D] to-[#16445D]" },
    { id: 4, name: "CrashX", icon: "💥", players: "15.3K playing", badge: "BETX ORIGINAL", bg: "from-[#1D4A2C] to-[#1D4A2C]" },
  ],
  slots: [
    { id: 1, name: "Teen Patti", icon: "♠️", players: "21.1K playing", rtp: "95.8%", badge: "HOT", rating: "4.7" },
    { id: 2, name: "Blackjack", icon: "🃏", players: "17.5K playing", rtp: "96.5%", badge: "JACKPOT", rating: "4.9" },
    { id: 3, name: "Dragon Tiger", icon: "🐉", players: "14.2K playing", rtp: "97.1%", badge: "NEW", rating: "4.8" },
    { id: 4, name: "Mines", icon: "💣", players: "15.6K playing", rtp: "94.2%", badge: "TRENDING", rating: "4.6" },
    { id: 5, name: "Uncrossable Rush", icon: "🏃", players: "31.2K playing", rtp: "96.8%", badge: "HOT", rating: "4.9" },
  ]
};

const VipPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
     
      {/* Main Content - Same width as HomePage (max-w-md) */}
      <div className="pt-20 pb-24">
        <div className="max-w-md mx-auto px-4">

          {/* Live Games Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <span className="text-red-500">🔴</span> Live Games
                </h2>
              </div>
              <span className="text-xs text-gray-400">{ALL_GAMES_DATA.liveGames.length} games</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {ALL_GAMES_DATA.liveGames.map((game) => (
                <div
                  key={game.id}
                  className={`bg-gradient-to-br ${game.bg} rounded-[30px] p-5 min-h-60 relative overflow-hidden border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group`}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  <div className="flex justify-between mb-6">
                    <span className="px-2 py-0.5 rounded-full bg-red-500/80 text-white text-[10px] font-bold animate-pulse">
                      {game.badge}
                    </span>
                    {game.tag && (
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/80 text-white text-[10px] font-bold">
                        {game.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {game.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold group-hover:text-yellow-400">
                    {game.name}
                  </h3>
                  <p className="text-green-400 text-lg font-bold mt-1">
                    {game.multiplier}x
                  </p>
                  <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center">
                    <span className="text-white/60 text-xs flex items-center gap-1">
                      <Users className="w-3 h-3" /> {game.players}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-yellow-500 group-hover:scale-110 transition-all">
                      ▶
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BetX Originals Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <span>👑</span> BetX Originals
                </h2>
              </div>
              <span className="text-xs text-gray-400">{ALL_GAMES_DATA.originals.length} games</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {ALL_GAMES_DATA.originals.map((game) => (
                <div
                  key={game.id}
                  className={`bg-gradient-to-br ${game.bg} rounded-[28px] p-5 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group border border-white/10`}
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {game.icon}
                  </div>
                  <h3 className="text-white text-lg font-bold group-hover:text-yellow-400">
                    {game.name}
                  </h3>
                  <div className="mt-3 px-2 py-1 rounded-full border border-white/20 text-white/70 text-[10px] font-bold inline-block group-hover:border-yellow-500/50 group-hover:text-yellow-400">
                    {game.badge}
                  </div>
                  <p className="text-gray-400 text-xs mt-2 flex items-center justify-center gap-1">
                    <Users className="w-3 h-3" /> {game.players}
                  </p>
                </div>
              ))}
            </div>
          </div>

         

        </div>
      </div>

     
    </div>
  );
};

export default VipPage;