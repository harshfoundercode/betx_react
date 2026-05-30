
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   Plane, TrendingUp, Zap, Award, Clock, CreditCard, LogOut,
//   Home, Crown, User, LogIn, UserPlus, Menu, X, Users,
//   Landmark,
//   WalletCards,
// } from 'lucide-react';
// import { useAuth } from '../pages/services/AuthContext';
// import aviatorBg from "../assets/aviator.webp";
// import teenpatti from "../assets/teenpatti.jpg";
// import blackjack from "../assets/blackjack.jpg";
// import dragontiger from "../assets/dragontiger.jpg";

// const HomePage = () => {
//   const { user, logout } = useAuth();
//   const [multiplier, setMultiplier] = useState(1.00);
//   const [isFlying, setIsFlying] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentWin, setCurrentWin] = useState(0);
//   const navigate = useNavigate();


//   useEffect(() => {
//     let interval;
//     if (isFlying) {
//       interval = setInterval(() => {
//         setMultiplier(prev => {
//           const newVal = prev + Math.random() * 0.5;
//           return parseFloat(newVal.toFixed(2));
//         });
//       }, 300);
//     } else {
//       setMultiplier(1.00);
//     }
//     return () => clearInterval(interval);
//   }, [isFlying]);

//   const quickActions = [
//     {
//       id: 1,
//       title: "24,973",
//       subtitle: "Online Players",
//       icon: Users,
//       color: "#F59E0B",
//       bg: "rgba(245,158,11,0.08)",
//       border: "rgba(245,158,11,0.25)",
//       path: null,
//     },
//     {
//       id: 2,
//       title: "Deposit",
//       subtitle: "Add Funds",
//       icon: Landmark,
//       color: "#22C55E",
//       bg: "rgba(34,197,94,0.08)",
//       border: "rgba(34,197,94,0.25)",
//       path: "/deposit",
//     },
//     {
//       id: 3,
//       title: "Withdraw",
//       subtitle: "Withdraw Funds",
//       icon: WalletCards,
//       color: "#EF4444",
//       bg: "rgba(239,68,68,0.08)",
//       border: "rgba(239,68,68,0.25)",
//       path: "/withdraw",
//     },
//   ];

//   const recentWins = [
//     {
//       user: "Raj***",
//       game: "Crash",
//       amount: "₹1,24,500",
//       time: "2m ago",
//     },
//     {
//       user: "Aman***",
//       game: "Aviator",
//       amount: "₹89,750",
//       time: "1m ago",
//     },
//     {
//       user: "Rohit***",
//       game: "Teen Patti",
//       amount: "₹2,10,000",
//       time: "30s ago",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWin((prev) => (prev + 1) % recentWins.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const gameSections = [
//     {
//       id: 1,
//       title: "Live Games",
//       icon: "🔴",
//       type: "live",
//       games: [
//         {
//           id: 1,
//           name: "Aviator",
//           image: "🚀",
//           isEmoji: true,
//           badge: "LIVE",
//           tag: "TRENDING",
//           players: "12.4K playing",
//           multiplier: "16.40x",
//           bg: "from-emerald-700/80 to-emerald-500/60",
//         },
//         {
//           id: 2,
//           name: "Ludo",
//           image: "🎲",
//           isEmoji: true,
//           badge: "HOT",
//           players: "8.2K playing",
//           multiplier: "15.13x",
//           bg: "from-orange-700/80 to-orange-500/60",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "BetX Originals",
//       icon: "👑",
//       type: "original",
//       games: [
//         {
//           id: 1,
//           name: "Tower Rush",
//           image: "🗼",
//           isEmoji: true,
//           subtitle: "BETX ORIGINAL",
//           bg: "from-[#441C75] to-[#441C75]",
//         },
//         {
//           id: 2,
//           name: "Chicken Road",
//           image: "🐔",
//           isEmoji: true,
//           subtitle: "BETX ORIGINAL",
//           bg: "from-[#6E1B3A] to-[#6E1B3A]",
//         },
//         {
//           id: 3,
//           name: "Magic Wheel",
//           image: "🎡",
//           isEmoji: true,
//           subtitle: "BETX ORIGINAL",
//           bg: "from-[#16445D] to-[#16445D]",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "Popular Slots",
//       icon: "🎰",
//       type: "slot",
//       games: [
//         {
//           id: 1,
//           name: "Teen Patti",
//           image: teenpatti,
//           isEmoji: false,
//           badge: "HOT",
//           rating: "4.7",
//           rtp: "95.8%",
//         },
//         {
//           id: 2,
//           name: "Blackjack",
//           image: blackjack,
//           isEmoji: false,
//           badge: "JACKPOT",
//           rating: "4.9",
//           rtp: "96.5%",
//         },
//         {
//           id: 3,
//           name: "Dragon Tiger",
//           image: dragontiger,
//           isEmoji: false,
//           badge: "NEW",
//           rating: "4.8",
//           rtp: "97.1%",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Top Right Auth Section */}
//       <div className="fixed top-0 right-0 left-0 z-50 bg-black">
//         <div className="max-w-7.1xl mx-auto px-4 py-3">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <Link to="/" className="text-2xl font-bold">
//               <span className="text-white">BET</span>
//               <span className="text-yellow-400">X</span>
//             </Link>

//             {/* Desktop Auth Buttons */}
//             <div className="hidden md:flex items-center gap-3">
//               {user ? (
//                 <>
//                   <div className="flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-full">
//                     <User className="w-4 h-4 text-yellow-400" />
//                     <span className="text-sm font-medium">{user.username || user.name}</span>
//                     <div className="w-px h-4 bg-gray-600"></div>
//                     <span className="text-green-400 font-bold">₹{user.balance?.toLocaleString()}</span>
//                   </div>
//                   <button
//                     onClick={logout}
//                     className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-semibold transition-all"
//                   >
//                     <LogOut className="w-4 h-4" /> Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="group relative overflow-hidden flex items-center justify-center px-6 py-2 rounded-2xl font-semibold text-white bg-linear-to-r from-[#F25335] to-[#F76921] shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     <span className="relative z-10">Login</span>
//                     <div className="absolute inset-0">
//                       <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"></div>
//                     </div>
//                   </Link>
//                 </>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden text-gray-300"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4 px-4">
//             {user ? (
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between bg-gray-800/50 px-4 py-2 rounded-xl">
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4 text-yellow-400" />
//                     <span className="text-sm font-medium">{user.username || user.name}</span>
//                   </div>
//                   <span className="text-green-400 font-bold">₹{user.balance?.toLocaleString()}</span>
//                 </div>
//                 <button
//                   onClick={() => {
//                     logout();
//                     setMobileMenuOpen(false);
//                   }}
//                   className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded-xl text-sm font-semibold transition-all"
//                 >
//                   <LogOut className="w-4 h-4" /> Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 <Link
//                   to="/login"
//                   className="group relative overflow-hidden flex items-center justify-center px-6 py-2 rounded-2xl font-semibold text-white bg-linear-to-r from-[#F25335] to-[#F76921] shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <span className="relative z-10">Login</span>
//                   <div className="absolute inset-0">
//                     <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"></div>
//                   </div>
//                 </Link>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Main Content - Centered with max-w-md (600px) */}
//       <div className="pt-20 pb-24">
//         <div className="max-w-md mx-auto px-4">
//           {/* Game Card */}
//           <div
//             className="relative overflow-hidden rounded-4xl border border-red-500/30 p-8 mb-4 min-h-50 bg-contain bg-center"
//             style={{
//               backgroundImage: `url(${aviatorBg})`,
//             }}
//           >
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-red-950/40" />

//             {/* Content */}
//             <div className="relative z-10 h-full flex flex-col justify-between">
//               {/* Top Row */}
//               <div className="flex justify-between items-center">
//                 {/* Live Game */}
//                 <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md">
//                   <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
//                   <span className="text-red-400 font-semibold tracking-[2px] text-[9px]">
//                     LIVE GAME
//                   </span>
//                 </div>

//                 {/* Players */}
//                 <div className="px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/10 flex items-center gap-1.5">
//                   <Crown className="w-3.5 h-3.5 text-yellow-400" />
//                   <span className="text-white font-semibold text-[9px]">
//                     24K PLAYERS
//                   </span>
//                 </div>
//               </div>

//               {/* Middle Content */}
//               <div className="max-w-sm mt-14">
//                 <p className="text-gray-400 text-xs leading-relaxed">
//                   Cash out before the plane crashes and win huge multipliers instantly.
//                 </p>
//               </div>

//               {/* Bottom Row */}
//               <div className="flex justify-between items-end mt-3">
//                 {/* Play Button */}
//                 <button className="group relative overflow-hidden bg-linear-to-r from-[#F25335] to-[#F76921] text-white font-bold px-5 py-2 rounded-[10px] shadow-[0_0_25px_rgba(242,83,53,0.45)] hover:scale-105 transition-all duration-300">
//                   <span className="relative z-10 flex items-center">
//                     <span className="text-sm"> ▶ PLAY AVIATOR</span>
//                   </span>
//                   {/* Shine */}
//                   <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12"></span>
//                 </button>

//                 {/* Multiplier */}
//                 <div className="bg-linear-to-r from-[#F25335] to-[#F76921] px-5 py-2 rounded-[10px] text-white font-medium text-sm shadow-[0_0_30px_rgba(242,83,53,0.6)] animate-bounce">
//                   12.43x
//                 </div>
//               </div>
//             </div>

//             {/* Red Glow */}
//             <div className="absolute inset-0 rounded-4xl shadow-[0_0_80px_rgba(255,0,0,0.15)] pointer-events-none" />
//           </div>

//           {/* three grid */}
//           <div className="grid grid-cols-3 gap-4 mt-5">
//             {quickActions.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.id}
//                   onClick={() =>
//                     item.path && navigate(item.path)
//                   }
//                   className="h-33.75 rounded-[28px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
//                   style={{
//                     background: `linear-gradient(180deg, ${item.bg} 0%, rgba(0,0,0,0.35) 100%)`,
//                     border: `1px solid ${item.border}`,
//                     boxShadow: `0 0 30px ${item.bg}`,
//                   }}
//                 >
//                   {/* Glow Circle */}
//                   <div
//                     className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       background: `${item.bg}`,
//                       boxShadow: `0 10px 30px ${item.color}70`,
//                     }}
//                   >
//                     <Icon
//                       size={22}
//                       style={{
//                         color: item.color,
//                       }}
//                     />
//                   </div>
//                   <h3
//                     className="font-bold text-[15px]"
//                     style={{ color: item.color }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-500 text-xs mt-1">
//                     {item.subtitle}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* recent big wins */}
//           <div className="relative overflow-hidden rounded-[22px] mt-5 border border-amber-500/20 bg-linear-to-r from-[#181C33] via-[#16213F] to-[#122C52]">
//             {/* Header */}
//             <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
//               <span className="text-yellow-400">🏆</span>
//               <span className="text-yellow-400 text-sm font-bold tracking-[2px] uppercase">
//                 Recent Big Wins
//               </span>
//               <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
//             </div>

//             {/* Content */}
//             <div className="px-5 py-4 flex items-center justify-between">
//               <div>
//                 <p className="text-sm">
//                   <span className="text-white font-semibold">
//                     {recentWins[currentWin].user}
//                   </span>
//                   <span className="text-gray-400"> won on </span>
//                   <span className="text-yellow-400 font-medium">
//                     {recentWins[currentWin].game}
//                   </span>
//                 </p>
//               </div>
//               <div className="text-right">
//                 <p className="text-green-400 text-md font-bold">
//                   {recentWins[currentWin].amount}
//                 </p>
//                 <p className="text-gray-500 text-xs">
//                   {recentWins[currentWin].time}
//                 </p>
//               </div>
//             </div>

//             {/* Glow */}
//             <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-blue-400/5 to-transparent" />
//           </div>

//           {/* game list */}
//           <div className='mt-5'>
//             {gameSections.map((section) => (
//               <div key={section.id} className="mb-10">
//                 {/* Heading */}
//                 <div className="flex items-center justify-between mb-4">
//                   <h1 className="flex items-center gap-3 text-white text-xl font-bold">
//                     <span>{section.icon}</span>
//                     {section.title}
//                   </h1>
//                   <button
//                     onClick={() => navigate('/view-all-games', {
//                       state: {
//                         sectionTitle: section.title,
//                         sectionIcon: section.icon,
//                         games: section.games,
//                         sectionType: section.type
//                       }
//                     })}
//                     className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs hover:bg-orange-500/20 transition-all duration-300 hover:scale-105"
//                   >
//                     View All →
//                   </button>
//                 </div>

//                 {/* LIVE GAMES */}
//                 {section.type === "live" && (
//                   <div className="grid grid-cols-2 gap-4">
//                     {section.games.map((game) => (
//                       <div
//                         key={game.id}
//                         className={`bg-linear-to-br ${game.bg} rounded-[30px] p-6 min-h-65 relative overflow-hidden border-2 border-white/10 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-500/50 cursor-pointer group`}
//                       >
//                         {/* Animated shine effect on hover */}
//                         <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

//                         <div className="flex justify-between mb-8">
//                           <span className="px-3 py-1 rounded-full bg-black/20 text-green-300 text-xs group-hover:bg-green-500/30 transition-all duration-300">
//                             {game.badge}
//                           </span>
//                           {game.tag && (
//                             <span className="px-3 py-1 rounded-full bg-black/20 text-orange-300 text-xs group-hover:bg-orange-500/30 transition-all duration-300 group-hover:animate-pulse">
//                               {game.tag}
//                             </span>
//                           )}
//                         </div>
//                         {/* Conditional rendering for emoji vs image */}
//                         {game.isEmoji ? (
//                           <div className="w-10 h-10 flex items-center justify-center mb-4 text-6xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
//                             {game.image}
//                           </div>
//                         ) : (
//                           <img
//                             src={game.image}
//                             alt=""
//                             className="w-20 h-20 object-contain mb-4 group-hover:scale-110 transition-all duration-300"
//                           />
//                         )}
//                         <h3 className="text-white text-2xl font-bold group-hover:text-yellow-400 transition-all duration-300">
//                           {game.name}
//                         </h3>
//                         <p className="text-green-300 text-md font-bold mt-1 group-hover:text-green-400 transition-all duration-300">
//                           {game.multiplier}
//                         </p>
//                         <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
//                           <span className="text-white/70 text-xs group-hover:text-white transition-all duration-300">
//                             {game.players}
//                           </span>
//                           <button className="w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
//                             ▶
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* BETX ORIGINALS */}
//                 {section.type === "original" && (
//                   <div className="grid grid-cols-3 gap-4">
//                     {section.games.map((game) => (
//                       <div
//                         key={game.id}
//                         className={`bg-linear-to-br ${game.bg} rounded-[28px] p-5 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group`}
//                       >
//                         {/* Animated glow effect on hover */}
//                         <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-yellow-500/20 to-transparent pointer-events-none"></div>

//                         {game.isEmoji ? (
//                           <div className="w-10 h-10 flex items-center justify-center mx-auto mb-6 text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                             {game.image}
//                           </div>
//                         ) : (
//                           <img
//                             src={game.image}
//                             alt=""
//                             className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
//                           />
//                         )}
//                         <h3 className="text-white text-xl font-bold group-hover:text-yellow-400 transition-all duration-300">
//                           {game.name}
//                         </h3>
//                         <div className="mt-4 px-3 py-2 rounded-full border border-white/10 text-white/70 text-xs font-bold group-hover:border-yellow-500/50 group-hover:text-yellow-400 transition-all duration-300">
//                           {game.subtitle}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* POPULAR SLOTS */}
//                 {section.type === "slot" && (
//                   <div className="space-y-4">
//                     {section.games.map((game) => (
//                       <div
//                         key={game.id}
//                         className="relative overflow-hidden rounded-[30px] h-45 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group"
//                       >
//                         <img
//                           src={game.image}
//                           alt=""
//                           className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />

//                         {/* Animated border glow */}
//                         <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-yellow-500/50 pointer-events-none"></div>

//                         <div className="relative z-10 p-4 h-full flex flex-col justify-between">
//                           <div className="flex gap-2">
//                             <span className="px-3 py-1 bg-red-500 text-black rounded-full text-xs font-bold group-hover:bg-red-600 group-hover:scale-105 transition-all duration-300">
//                               {game.badge}
//                             </span>
//                             <span className="px-3 py-1 bg-black/40 text-white rounded-full text-xs group-hover:bg-black/60 transition-all duration-300">
//                               RTP {game.rtp}
//                             </span>
//                           </div>
//                           <div>
//                             <p className="text-gray-400 mb-1 text-sm group-hover:text-yellow-400 transition-all duration-300">
//                               ⭐ {game.rating}
//                             </p>
//                             <h2 className="text-white text-xl font-bold group-hover:text-yellow-400 transition-all duration-300">
//                               {game.name}
//                             </h2>
//                             <button className="mt-1 bg-[#ED9409] text-xs text-black px-4 py-2 rounded-2xl font-bold group-hover:bg-yellow-500 group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
//                               Play Now ▶
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

         
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plane, TrendingUp, Zap, Award, Clock, CreditCard, LogOut,
  Home, Crown, User, LogIn, UserPlus, Menu, X, Users,
  Landmark,
  WalletCards,
} from 'lucide-react';
import { useAuth } from '../pages/services/AuthContext';
import aviatorBg from "../assets/aviator.webp";
import teenpatti from "../assets/teenpatti.jpg";
import blackjack from "../assets/blackjack.jpg";
import dragontiger from "../assets/dragontiger.jpg";

const HomePage = () => {
  const { user, logout } = useAuth();
  const [multiplier, setMultiplier] = useState(1.00);
  const [isFlying, setIsFlying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentWin, setCurrentWin] = useState(0);
  const navigate = useNavigate();

  // State for animated game multipliers
  const [gameMultipliers, setGameMultipliers] = useState({
    aviator: "16.40x",
    ludo: "15.13x",
  });

  // State for total online players (animated)
  const [totalPlayers, setTotalPlayers] = useState(24059);
  const [animatedWinAmount, setAnimatedWinAmount] = useState("₹1,24,500");

  // Animated multipliers for live games
  useEffect(() => {
    const intervals = [];
    
    // Aviator multiplier animation
    intervals.push(setInterval(() => {
      setGameMultipliers(prev => ({
        ...prev,
        aviator: `${(Math.random() * 20 + 10).toFixed(2)}x`
      }));
    }, 3000));
    
    // Ludo multiplier animation
    intervals.push(setInterval(() => {
      setGameMultipliers(prev => ({
        ...prev,
        ludo: `${(Math.random() * 18 + 8).toFixed(2)}x`
      }));
    }, 3500));
    
    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  // Animated total online players
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPlayers(prev => {
        const change = Math.floor(Math.random() * 100) - 50;
        const newValue = prev + change;
        return Math.max(20000, Math.min(30000, newValue));
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Animated winning amount in recent wins
  useEffect(() => {
    const amounts = ["₹1,24,500", "₹89,750", "₹2,10,000", "₹45,320", "₹3,15,000", "₹67,890"];
    const interval = setInterval(() => {
      setAnimatedWinAmount(amounts[Math.floor(Math.random() * amounts.length)]);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const quickActions = [
    {
      id: 1,
      title: totalPlayers.toLocaleString(),
      subtitle: "Online Players",
      icon: Users,
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.08)",
      border: "rgba(245,158,11,0.25)",
      path: null,
    },
    {
      id: 2,
      title: "Deposit",
      subtitle: "Add Funds",
      icon: Landmark,
      color: "#22C55E",
      bg: "rgba(34,197,94,0.08)",
      border: "rgba(34,197,94,0.25)",
      path: "/deposit",
    },
    {
      id: 3,
      title: "Withdraw",
      subtitle: "Withdraw Funds",
      icon: WalletCards,
      color: "#EF4444",
      bg: "rgba(239,68,68,0.08)",
      border: "rgba(239,68,68,0.25)",
      path: "/withdraw",
    },
  ];

  const recentWins = [
    {
      user: "Raj***",
      game: "Crash",
      amount: "₹1,24,500",
      time: "2m ago",
    },
    {
      user: "Aman***",
      game: "Aviator",
      amount: "₹89,750",
      time: "1m ago",
    },
    {
      user: "Rohit***",
      game: "Teen Patti",
      amount: "₹2,10,000",
      time: "30s ago",
    },
    {
      user: "Priya***",
      game: "Dragon Tiger",
      amount: "₹3,45,000",
      time: "Just now",
    },
    {
      user: "Vikram***",
      game: "Blackjack",
      amount: "₹1,78,500",
      time: "45s ago",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWin((prev) => (prev + 1) % recentWins.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const gameSections = [
    {
      id: 1,
      title: "Live Games",
      icon: "🔴",
      type: "live",
      games: [
        {
          id: 1,
          name: "Aviator",
          image: "🚀",
          isEmoji: true,
          badge: "LIVE",
          tag: "TRENDING",
          players: "12.4K playing",
          multiplier: gameMultipliers.aviator,
          bg: "from-emerald-700/80 to-emerald-500/60",
        },
        {
          id: 2,
          name: "Ludo",
          image: "🎲",
          isEmoji: true,
          badge: "HOT",
          players: "8.2K playing",
          multiplier: gameMultipliers.ludo,
          bg: "from-orange-700/80 to-orange-500/60",
        },
      ],
    },
    {
      id: 2,
      title: "BetX Originals",
      icon: "👑",
      type: "original",
      games: [
        {
          id: 1,
          name: "Tower Rush",
          image: "🗼",
          isEmoji: true,
          subtitle: "BETX ORIGINAL",
          bg: "from-[#441C75] to-[#441C75]",
        },
        {
          id: 2,
          name: "Chicken Road",
          image: "🐔",
          isEmoji: true,
          subtitle: "BETX ORIGINAL",
          bg: "from-[#6E1B3A] to-[#6E1B3A]",
        },
        {
          id: 3,
          name: "Magic Wheel",
          image: "🎡",
          isEmoji: true,
          subtitle: "BETX ORIGINAL",
          bg: "from-[#16445D] to-[#16445D]",
        },
      ],
    },
    {
      id: 3,
      title: "Popular Slots",
      icon: "🎰",
      type: "slot",
      games: [
        {
          id: 1,
          name: "Teen Patti",
          image: teenpatti,
          isEmoji: false,
          badge: "HOT",
          rating: "4.7",
          rtp: "95.8%",
        },
        {
          id: 2,
          name: "Blackjack",
          image: blackjack,
          isEmoji: false,
          badge: "JACKPOT",
          rating: "4.9",
          rtp: "96.5%",
        },
        {
          id: 3,
          name: "Dragon Tiger",
          image: dragontiger,
          isEmoji: false,
          badge: "NEW",
          rating: "4.8",
          rtp: "97.1%",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Right Auth Section */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-black">
        <div className="max-w-7.1xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              <span className="text-white">BET</span>
              <span className="text-yellow-400">X</span>
            </Link>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <div className="flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-full">
                    <User className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">{user.username || user.name}</span>
                    <div className="w-px h-4 bg-gray-600"></div>
                    <span className="text-green-400 font-bold">₹{user.balance?.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="group relative overflow-hidden flex items-center justify-center px-6 py-2 rounded-2xl font-semibold text-white bg-linear-to-r from-[#F25335] to-[#F76921] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"></div>
                    </div>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4 px-4">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-800/50 px-4 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">{user.username || user.name}</span>
                  </div>
                  <span className="text-green-400 font-bold">₹{user.balance?.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded-xl text-sm font-semibold transition-all"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="group relative overflow-hidden flex items-center justify-center px-6 py-2 rounded-2xl font-semibold text-white bg-linear-to-r from-[#F25335] to-[#F76921] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"></div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Content - Centered with max-w-md (600px) */}
      <div className="pt-20 pb-24">
        <div className="max-w-md mx-auto px-4">
          {/* Game Card */}
          <div
            className="relative overflow-hidden rounded-4xl border border-red-500/30 p-8 mb-4 min-h-50 bg-contain bg-center"
            style={{
              backgroundImage: `url(${aviatorBg})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-red-950/40" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Top Row */}
              <div className="flex justify-between items-center">
                {/* Live Game */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-red-400 font-semibold tracking-[2px] text-[9px]">
                    LIVE GAME
                  </span>
                </div>

                {/* Players */}
                <div className="px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/10 flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-white font-semibold text-[9px] animate-pulse">
                    {totalPlayers.toLocaleString()} PLAYERS
                  </span>
                </div>
              </div>

              {/* Middle Content */}
              <div className="max-w-sm mt-14">
                <p className="text-gray-400 text-xs leading-relaxed">
                  Cash out before the plane crashes and win huge multipliers instantly.
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-end mt-3">
                {/* Play Button */}
                <button className="group relative overflow-hidden bg-linear-to-r from-[#F25335] to-[#F76921] text-white font-bold px-5 py-2 rounded-[10px] shadow-[0_0_25px_rgba(242,83,53,0.45)] hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    <span className="text-sm"> ▶ PLAY AVIATOR</span>
                  </span>
                  {/* Shine */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12"></span>
                </button>

                {/* Animated Multiplier */}
                <div className="bg-linear-to-r from-[#F25335] to-[#F76921] px-5 py-2 rounded-[10px] text-white font-medium text-sm shadow-[0_0_30px_rgba(242,83,53,0.6)] animate-bounce">
                  {gameMultipliers.aviator}
                </div>
              </div>
            </div>

            {/* Red Glow */}
            <div className="absolute inset-0 rounded-4xl shadow-[0_0_80px_rgba(255,0,0,0.15)] pointer-events-none" />
          </div>

          {/* three grid */}
          <div className="grid grid-cols-3 gap-4 mt-5">
            {quickActions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() =>
                    item.path && navigate(item.path)
                  }
                  className="h-33.75 rounded-[28px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: `linear-gradient(180deg, ${item.bg} 0%, rgba(0,0,0,0.35) 100%)`,
                    border: `1px solid ${item.border}`,
                    boxShadow: `0 0 30px ${item.bg}`,
                  }}
                >
                  {/* Glow Circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.bg}`,
                      boxShadow: `0 10px 30px ${item.color}70`,
                    }}
                  >
                    <Icon
                      size={22}
                      style={{
                        color: item.color,
                      }}
                    />
                  </div>
                  <h3
                    className="font-bold text-[15px] transition-all duration-300"
                    style={{ color: item.color }}
                  >
                    {item.id === 1 ? (
                      <span className="animate-pulse">{item.title}</span>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* recent big wins */}
          <div className="relative overflow-hidden rounded-[22px] mt-5 border border-amber-500/20 bg-linear-to-r from-[#181C33] via-[#16213F] to-[#122C52]">
            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
              <span className="text-yellow-400">🏆</span>
              <span className="text-yellow-400 text-sm font-bold tracking-[2px] uppercase">
                Recent Big Wins
              </span>
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            </div>

            {/* Animated Content */}
            <div className="px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm">
                  <span className="text-white font-semibold">
                    {recentWins[currentWin].user}
                  </span>
                  <span className="text-gray-400"> won on </span>
                  <span className="text-yellow-400 font-medium animate-pulse">
                    {recentWins[currentWin].game}
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-green-400 text-md font-bold transition-all duration-500 ease-in-out animate-pulse">
                  {recentWins[currentWin].amount}
                </p>
                <p className="text-gray-500 text-xs">
                  {recentWins[currentWin].time}
                </p>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-blue-400/5 to-transparent" />
          </div>

          {/* game list */}
          <div className='mt-5'>
            {gameSections.map((section) => (
              <div key={section.id} className="mb-10">
                {/* Heading */}
                <div className="flex items-center justify-between mb-4">
                  <h1 className="flex items-center gap-3 text-white text-xl font-bold">
                    <span>{section.icon}</span>
                    {section.title}
                  </h1>
                  <button
                    onClick={() => navigate('/view-all-games', {
                      state: {
                        sectionTitle: section.title,
                        sectionIcon: section.icon,
                        games: section.games,
                        sectionType: section.type
                      }
                    })}
                    className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs hover:bg-orange-500/20 transition-all duration-300 hover:scale-105"
                  >
                    View All →
                  </button>
                </div>

                {/* LIVE GAMES */}
                {section.type === "live" && (
                  <div className="grid grid-cols-2 gap-4">
                    {section.games.map((game) => (
                      <div
                        key={game.id}
                        className={`bg-linear-to-br ${game.bg} rounded-[30px] p-6 min-h-65 relative overflow-hidden border-2 border-white/10 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-500/50 cursor-pointer group`}
                      >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                        <div className="flex justify-between mb-8">
                          <span className="px-3 py-1 rounded-full bg-black/20 text-green-300 text-xs group-hover:bg-green-500/30 transition-all duration-300">
                            {game.badge}
                          </span>
                          {game.tag && (
                            <span className="px-3 py-1 rounded-full bg-black/20 text-orange-300 text-xs group-hover:bg-orange-500/30 transition-all duration-300 group-hover:animate-pulse">
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
                        
                        <h3 className="text-white text-2xl font-bold group-hover:text-yellow-400 transition-all duration-300">
                          {game.name}
                        </h3>
                        
                        {/* Animated Multiplier */}
                        <p className="text-green-300 text-md font-bold mt-1 group-hover:text-green-400 transition-all duration-300 animate-pulse">
                          {game.multiplier}
                        </p>
                        
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                          <span className="text-white/70 text-xs group-hover:text-white transition-all duration-300">
                            {game.players}
                          </span>
                          <button className="w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                            ▶
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* BETX ORIGINALS */}
                {section.type === "original" && (
                  <div className="grid grid-cols-3 gap-4">
                    {section.games.map((game) => (
                      <div
                        key={game.id}
                        className={`bg-linear-to-br ${game.bg} rounded-[28px] p-5 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group`}
                      >
                        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-yellow-500/20 to-transparent pointer-events-none"></div>

                        {game.isEmoji ? (
                          <div className="w-10 h-10 flex items-center justify-center mx-auto mb-6 text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            {game.image}
                          </div>
                        ) : (
                          <img
                            src={game.image}
                            alt=""
                            className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                          />
                        )}
                        <h3 className="text-white text-xl font-bold group-hover:text-yellow-400 transition-all duration-300">
                          {game.name}
                        </h3>
                        <div className="mt-4 px-3 py-2 rounded-full border border-white/10 text-white/70 text-xs font-bold group-hover:border-yellow-500/50 group-hover:text-yellow-400 transition-all duration-300">
                          {game.subtitle}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* POPULAR SLOTS */}
                {section.type === "slot" && (
                  <div className="space-y-4">
                    {section.games.map((game) => (
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
                            <span className="px-3 py-1 bg-red-500 text-black rounded-full text-xs font-bold group-hover:bg-red-600 group-hover:scale-105 transition-all duration-300">
                              {game.badge}
                            </span>
                            <span className="px-3 py-1 bg-black/40 text-white rounded-full text-xs group-hover:bg-black/60 transition-all duration-300">
                              RTP {game.rtp}
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-400 mb-1 text-sm group-hover:text-yellow-400 transition-all duration-300">
                              ⭐ {game.rating}
                            </p>
                            <h2 className="text-white text-xl font-bold group-hover:text-yellow-400 transition-all duration-300">
                              {game.name}
                            </h2>
                            <button className="mt-1 bg-[#ED9409] text-xs text-black px-4 py-2 rounded-2xl font-bold group-hover:bg-yellow-500 group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                              Play Now ▶
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;