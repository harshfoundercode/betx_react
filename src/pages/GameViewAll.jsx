import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, CreditCard, Crown, User, ArrowLeft, Users, Star
} from 'lucide-react';

const ViewAllGamesPage = () => {
  const location = useLocation();
  const { sectionTitle, sectionIcon, games, sectionType } = location.state || {};

  if (!games) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>No games found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <span>{sectionIcon}</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {sectionTitle}
              </span>
            </h1>
            <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
              {games.length} Games
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-24">
        <div className="max-w-xl mx-auto px-4">
          
          {/* Render based on game type */}
          {sectionType === "live" && (
            <div className="grid grid-cols-2 gap-4">
              {games.map((game) => (
                <div
                  key={game.id}
                  className={`bg-gradient-to-br ${game.bg} rounded-[30px] p-6 min-h-65 relative overflow-hidden border-2 border-white/10 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-500/50 cursor-pointer group`}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  
                  <div className="flex justify-between mb-8">
                    <span className="px-3 py-1 rounded-full bg-black/20 text-green-300 text-xs group-hover:bg-green-500/30">
                      {game.badge}
                    </span>
                    {game.tag && (
                      <span className="px-3 py-1 rounded-full bg-black/20 text-orange-300 text-xs group-hover:bg-orange-500/30 group-hover:animate-pulse">
                        {game.tag}
                      </span>
                    )}
                  </div>
                  
                  {game.isEmoji ? (
                    <div className="w-10 h-10 flex items-center justify-center mb-4 text-6xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {game.image}
                    </div>
                  ) : (
                    <img
                      src={game.image}
                      alt=""
                      className="w-20 h-20 object-contain mb-4 group-hover:scale-110 transition-all duration-300"
                    />
                  )}
                  
                  <h3 className="text-white text-2xl font-bold group-hover:text-yellow-400">
                    {game.name}
                  </h3>
                  <p className="text-green-300 text-md font-bold mt-1">
                    {game.multiplier}
                  </p>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                    <span className="text-white/70 text-xs flex items-center gap-1">
                      <Users className="w-3 h-3" /> {game.players}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-yellow-500 group-hover:scale-110 transition-all">
                      ▶
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {sectionType === "original" && (
            <div className="grid grid-cols-2 gap-4">
              {games.map((game) => (
                <div
                  key={game.id}
                  className={`bg-gradient-to-br ${game.bg} rounded-[28px] p-5 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group border border-white/10`}
                >
                  {game.isEmoji ? (
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                      {game.image}
                    </div>
                  ) : (
                    <img
                      src={game.image}
                      alt=""
                      className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-all"
                    />
                  )}
                  <h3 className="text-white text-lg font-bold group-hover:text-yellow-400">
                    {game.name}
                  </h3>
                  <div className="mt-3 px-3 py-1 rounded-full border border-white/20 text-white/70 text-xs font-bold inline-block group-hover:border-yellow-500/50 group-hover:text-yellow-400">
                    {game.subtitle}
                  </div>
                  {game.players && (
                    <p className="text-gray-400 text-xs mt-2 flex items-center justify-center gap-1">
                      <Users className="w-3 h-3" /> {game.players}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {sectionType === "slot" && (
            <div className="space-y-4">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="relative overflow-hidden rounded-[30px] h-45 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group"
                >
                  <img
                    src={game.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
                  
                  <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-yellow-500/50 pointer-events-none"></div>
                  
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-red-500 text-black rounded-full text-xs font-bold group-hover:bg-red-600 group-hover:scale-105">
                        {game.badge}
                      </span>
                      <span className="px-3 py-1 bg-black/40 text-white rounded-full text-xs group-hover:bg-black/60">
                        RTP {game.rtp}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1 text-sm flex items-center gap-1 group-hover:text-yellow-400">
                        <Star className="w-3 h-3 fill-current" /> {game.rating}
                      </p>
                      <h2 className="text-white text-xl font-bold group-hover:text-yellow-400">
                        {game.name}
                      </h2>
                      <button className="mt-1 bg-[#ED9409] text-xs text-black px-4 py-2 rounded-2xl font-bold group-hover:bg-yellow-500 group-hover:scale-105 transition-all">
                        Play Now ▶
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="relative p-px rounded-[30px] bg-gradient-to-r from-cyan-500/40 via-yellow-500/30 to-red-500/40">
          <div className="bg-[#0B0B0D]/95 backdrop-blur-xl rounded-[30px] px-5 py-3 min-w-[280px]">
            <div className="flex justify-between items-center gap-4">
              {[
                { icon: <Home className="w-5 h-4" />, label: "HOME", path: "/", active: false },
                { icon: <CreditCard className="w-5 h-4" />, label: "DEPOSIT", path: "/deposit", active: false },
                { icon: <Crown className="w-5 h-4" />, label: "VIP", path: "/vip", active: false },
                { icon: <User className="w-5 h-4" />, label: "PROFILE", path: "/profile", active: false },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="relative flex flex-col items-center justify-center min-w-[60px] py-2 rounded-2xl transition-all duration-300 hover:scale-110 text-gray-500 hover:text-gray-300 hover:bg-white/5"
                >
                  <div className="relative z-10">{item.icon}</div>
                  <span className="relative z-10 text-[10px] font-semibold mt-1">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllGamesPage;