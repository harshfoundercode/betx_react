// /* eslint-disable react/prop-types */
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
// import { FiMinusCircle } from "react-icons/fi";
// import { LuCirclePlus } from "react-icons/lu";
// import { toast } from "react-toastify";
// import { socket } from "./AviatorSocket";
// import apis from "../utils/apis";
// import { useNavigate } from "react-router-dom";
// import "./index.css";
// import { configModalUsaWin } from "../utils/apis";
// import { useProfile } from "../reusable_component/gameApi";

// function BetButtonTwo({ setBtn, setBetApiHitted }) {
//   const userId = localStorage.getItem("userId");
//   const navigate = useNavigate();
//   const [betAmount, setBetAmount] = useState(1);
//   const [betStatus, setBetStatus] = useState(false);
//   const [isAuto, setIsAuto] = useState(false);
//   const [predictedCashoutValue, setPredictedCashoutValue] = useState(1.1);
//   const { myDetails } = useProfile(userId);

//   const [isAutoBetAndCashout, setIsAutoBetAndCashout] = useState({
//     autoBet: false,
//     autoCashout: false,
//   });
//   const [hotAirData, setHotAirData] = useState(null);

//   useEffect(() => {
//     const handleSocket = (hotair) => {
//       const q = JSON.parse(hotair);
//       setHotAirData(q);
//     };
//     socket.on("demobdg_aviator", handleSocket);
//     return () => socket.off("demobdg_aviator", handleSocket);
//   }, []);

//   const handleIncrement = () => setBetAmount((prev) => Number(prev) + 1);
//   const handleDecrement = () =>
//     setBetAmount((prev) => (prev > 1 ? Number(prev) - 1 : prev));
//   const handleQuickBet = (amount) => setBetAmount(amount);

//   const normalBetHandler = async () => {
//     try {
//       const loginTokenFromLocalStorage = localStorage.getItem("login_token");
//       const response = await axios.get(`${apis.profile}${userId}`);
//       const profileToken = response?.data?.data?.login_token;
//       if (profileToken != loginTokenFromLocalStorage) {
//         toast.error("Another user logged in");
//         navigate("/login");
//         return;
//       }
//       const sr =
//         hotAirData?.status === 0 && hotAirData?.betTime < 10
//           ? hotAirData?.period
//           : hotAirData?.period + 1;
//       const payload = {
//         uid: userId,
//         number: 2,
//         amount: betAmount,
//         game_id: 5,
//         game_sr_num: sr,
//       };
//       try {
//         const res = await axios.post(
//           `${configModalUsaWin}aviator_bet`,
//           payload
//         );
//         if (res?.data?.status === 200) {
//           setBetApiHitted({ bet2: true });
//           localStorage.setItem("aviatorBet2", "1");
//           localStorage.setItem("aviatorsr2", sr);
//           setBetStatus(true);
//           setBetApiHitted({ cancel2: false });
//           toast.success(res?.data?.message, {
//             className: "custom-toast custom-toast-success",
//           });
//         } else {
//           toast.warn(res?.data?.message, {
//             className: "custom-toast custom-toast-warn",
//           });
//         }
//       } catch (err) {
//         if (err?.response?.data?.status === 500) {
//           toast.error("Server problem");
//         } else {
//           toast.error(err?.response?.data?.message, {
//             className: "custom-toast custom-toast-error",
//           });
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching profile data:", error);
//       toast.error("Error fetching profile data");
//     }
//   };

//   const cancelNormalBetHandler = async () => {
//     const sr = localStorage.getItem("aviatorsr2");
//     try {
//       const res = await axios.get(
//         `${configModalUsaWin}aviator_bet_cancel?userid=${userId}&number=2&gamesno=${sr}`
//       );
//       if (res?.data?.status === 200) {
//         localStorage.setItem("aviatorBet2", "0");
//         localStorage.setItem("aviatorsr2", "0");
//         setBetStatus(false);
//         setBetApiHitted({ cancel2: true });
//         toast.success(res?.data?.message, {
//           className: "custom-toast custom-toast-success",
//         });
//       } else {
//         toast.warn(res?.data?.message, {
//           className: "custom-toast custom-toast-warn",
//         });
//       }
//     } catch (err) {
//       if (err?.response?.data?.status === 500) {
//         toast.error("Server problem");
//       } else {
//         toast.error(err?.response?.data?.message, {
//           className: "custom-toast custom-toast-error",
//         });
//       }
//     }
//   };

//   const cashoutNormalBetHandler = async () => {
//     const sr = localStorage.getItem("aviatorsr2");
//     const salt = {
//       uid: userId,
//       multiplier: hotAirData?.timer,
//       game_sr_num: sr,
//       number: 2,
//     };
//     const saltEncoded = btoa(JSON.stringify(salt));
//     try {
//       const res = await axios.post(
//         `${configModalUsaWin}aviator_cashout?salt=${encodeURIComponent(
//           saltEncoded
//         )}`
//       );
//       if (res?.data?.status === 200) {
//         localStorage.setItem("aviatorBet2", "0");
//         localStorage.setItem("aviatorsr2", "0");
//         setBetApiHitted({ cashout2: true });
//         setBetStatus(false);
//         toast.success(res?.data?.message, {
//           className: "custom-toast custom-toast-success",
//         });
//       } else {
//         toast.warn(res?.data?.message, {
//           className: "custom-toast custom-toast-warn",
//         });
//       }
//     } catch (err) {
//       if (err?.response?.data?.status === 500) {
//         toast.error("Server problem");
//       } else {
//         toast.error(err?.response?.data?.message, {
//           className: "custom-toast custom-toast-error",
//         });
//       }
//     }
//   };

//   useEffect(() => {
//     const status = localStorage.getItem("aviatorBet2");
//     if (status == 1) {
//       setBetStatus(true);
//     }
//     if (hotAirData?.status === 2) {
//       const lastBetRound = localStorage.getItem("aviatorsr2");
//       const currentRound = Number(hotAirData?.period);
//       if (lastBetRound != "0" && Number(lastBetRound) === currentRound) {
//         localStorage.setItem("aviatorBet2", "0");
//         localStorage.setItem("aviatorsr2", "0");
//         setBetStatus(false);
//       }
//     }
//   }, [hotAirData, betStatus]);

//   useEffect(() => {
//     if (
//       isAuto &&
//       isAutoBetAndCashout.autoBet &&
//       hotAirData?.status === 0 &&
//       hotAirData?.betTime == "9"
//     ) {
//       normalBetHandler();
//     }
//   }, [isAuto, isAutoBetAndCashout.autoBet, hotAirData]);

//   useEffect(() => {
//     if (
//       isAuto &&
//       isAutoBetAndCashout.autoCashout &&
//       hotAirData?.status === 1 &&
//       hotAirData?.timer == predictedCashoutValue
//     ) {
//       cashoutNormalBetHandler();
//     }
//   }, [isAuto, isAutoBetAndCashout.autoCashout, hotAirData]);

//   useEffect(() => {
//     setBtn((prevState) => ({
//       ...prevState,
//       btn2: isAuto,
//     }));
//   }, [isAuto]);

//   useEffect(() => {
//     const sr = hotAirData?.period;
//     const lasteBetSrNo = Number(localStorage.getItem("aviatorsr2"));
//     const aviatorBetStatus = Number(localStorage.getItem("aviatorBet2"));
//     if (
//       hotAirData?.status === 2 &&
//       hotAirData?.betTime === 2 &&
//       aviatorBetStatus === 1 &&
//       lasteBetSrNo === sr
//     ) {
//       localStorage.setItem("aviatorsr2", "0");
//       localStorage.setItem("aviatorBet2", "0");
//       setBetStatus(false);
//     }
//   }, [hotAirData]);

//   return (
//     <div className="w-full py-2 lg:w-1/2 text-[11px] sm:text-sm px-2 bg-blackAviator2 rounded-md">
//       {/* Bet/Auto Toggle */}
//       <div className="flex w-full max-w-[180px] mx-auto justify-between bg-black rounded-full">
//         <button
//           className={`flex-1 px-6 py-1 rounded-full text-center text-sm font-medium ${!isAuto ? "bg-blackAviator3 text-white" : "bg-black text-white/60"
//             }`}
//           onClick={() => setIsAuto(false)}
//         >
//           Bet
//         </button>
//         <button
//           className={`flex-1 px-6 py-1 rounded-full text-center text-sm font-medium ${isAuto ? "bg-blackAviator3 text-white" : "bg-black text-white/60"
//             }`}
//           onClick={() => setIsAuto(true)}
//         >
//           Auto
//         </button>
//       </div>

//       {/* Main Content - Flex Layout */}
//       <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 w-full">
//         {/* Left Section - Amount Controls */}
//         <div className="flex flex-col items-center w-full sm:w-[45%]">
//           <div className="flex w-full max-w-[150px] bg-black items-center text-xl justify-between px-2 py-0.5 rounded-full">
//             <button className="text-gray-400 hover:text-white transition-colors" onClick={handleDecrement}>
//               <FiMinusCircle size={20} />
//             </button>
//             <input
//               inputMode="numeric"
//               type="text"
//               min="0"
//               value={betAmount}
//               onBeforeInput={(e) => {
//                 if (!/^\d$/.test(e.data)) {
//                   e.preventDefault();
//                 }
//               }}
//               onChange={(e) => {
//                 const val = e.target.value.replace(/\D/g, "");
//                 const numericVal = Number(val);
//                 const wallet = Number(myDetails?.data?.total_wallet || 0);
//                 if (numericVal <= wallet) {
//                   setBetAmount(val);
//                 }
//               }}
//               className="text-white text-lg bg-transparent text-center w-14 outline-none no-spinner"
//             />
//             <button className="text-gray-400 hover:text-white transition-colors" onClick={handleIncrement}>
//               <LuCirclePlus size={20} />
//             </button>
//           </div>

//           <div className="flex gap-1 mt-1 items-center justify-center flex-wrap">
//             {[100, 200].map((amount) => (
//               <button
//                 key={amount}
//                 className="px-2.5 py-0.5 bg-blackAviator3 text-gray-300 hover:text-white rounded-full text-[10px] transition-colors"
//                 onClick={() => handleQuickBet(amount)}
//               >
//                 {Number(amount).toFixed(2)}
//               </button>
//             ))}
//           </div>
//           <div className="flex gap-1 mt-0.5 items-center justify-center flex-wrap">
//             {[500, 1000].map((amount) => (
//               <button
//                 key={amount}
//                 className="px-2.5 py-0.5 bg-blackAviator3 text-gray-300 hover:text-white rounded-full text-[10px] transition-colors"
//                 onClick={() => handleQuickBet(amount)}
//               >
//                 {Number(amount).toFixed(2)}
//               </button>
//             ))}
//           </div>

//           {isAuto && (
//             <div className="w-full mt-0.5 text-[10px] sm:text-xs text-gray flex items-center justify-center">
//               Auto Bet
//               <button className="ml-1">
//                 {isAutoBetAndCashout.autoBet ? (
//                   <BiToggleRight
//                     onClick={() =>
//                       setIsAutoBetAndCashout((prev) => ({
//                         ...prev,
//                         autoBet: false,
//                       }))
//                     }
//                     className="text-green-500"
//                     size={32}
//                   />
//                 ) : (
//                   <BiToggleLeft
//                     onClick={() =>
//                       setIsAutoBetAndCashout((prev) => ({
//                         ...prev,
//                         autoBet: true,
//                       }))
//                     }
//                     className="text-gray-500"
//                     size={32}
//                   />
//                 )}
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Right Section - Bet/Cancel Button - CHANGES MADE HERE */}
//         <div className="w-full sm:w-[55%]">
//           {betStatus ? (
//             hotAirData?.status === 1 &&
//               Number(localStorage.getItem("aviatorsr2")) ===
//               Number(hotAirData?.period) ? (
//               <div className="w-full">
//                 <button
//                   onClick={cashoutNormalBetHandler}
//                   className="text-white text-xs font-bold w-full py-1.5 border-[1.5px] border-green-500 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"
//                 >
//                   Cashout
//                   <br />
//                   <span className="text-sm">{(betAmount * hotAirData?.timer).toFixed(2)}</span>
//                 </button>
//                 {isAuto && (
//                   <div className="flex items-center justify-center gap-1 mt-1 flex-wrap">
//                     <span className="text-[10px] text-gray">Auto Cash Out</span>
//                     <button>
//                       {isAutoBetAndCashout.autoCashout ? (
//                         <BiToggleRight
//                           onClick={() =>
//                             setIsAutoBetAndCashout((prev) => ({
//                               ...prev,
//                               autoCashout: false,
//                             }))
//                           }
//                           className="text-green-500"
//                           size={28}
//                         />
//                       ) : (
//                         <BiToggleLeft
//                           onClick={() =>
//                             setIsAutoBetAndCashout((prev) => ({
//                               ...prev,
//                               autoCashout: true,
//                             }))
//                           }
//                           className="text-gray-500"
//                           size={28}
//                         />
//                       )}
//                     </button>
//                     <input
//                       value={predictedCashoutValue}
//                       onChange={(e) => setPredictedCashoutValue(e.target.value)}
//                       className="bg-black text-gray-300 rounded-full px-2 w-16 py-0.5 text-[10px] text-center"
//                     />
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="w-full">
//                 {hotAirData?.status === 1 && (
//                   <p className="text-[#F85050] text-[10px] text-center">
//                     Waiting for next round
//                   </p>
//                 )}
//                 <button
//                   onClick={cancelNormalBetHandler}
//                   className="text-white text-xs font-bold w-full py-1.5 border-[1.5px] border-red-500 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 {isAuto && (
//                   <div className="flex items-center justify-center gap-1 mt-1 flex-wrap">
//                     <span className="text-[10px] text-gray">Auto Cash Out</span>
//                     <button>
//                       {isAutoBetAndCashout.autoCashout ? (
//                         <BiToggleRight
//                           onClick={() =>
//                             setIsAutoBetAndCashout((prev) => ({
//                               ...prev,
//                               autoCashout: false,
//                             }))
//                           }
//                           className="text-green-500"
//                           size={28}
//                         />
//                       ) : (
//                         <BiToggleLeft
//                           onClick={() =>
//                             setIsAutoBetAndCashout((prev) => ({
//                               ...prev,
//                               autoCashout: true,
//                             }))
//                           }
//                           className="text-gray-500"
//                           size={28}
//                         />
//                       )}
//                     </button>
//                     <input
//                       value={predictedCashoutValue}
//                       onChange={(e) => setPredictedCashoutValue(e.target.value)}
//                       className="bg-black text-gray-300 rounded-full px-2 w-16 py-0.5 text-[10px] text-center"
//                     />
//                   </div>
//                 )}
//               </div>
//             )
//           ) : (
//             <div className="w-full">
//               <button
//                 onClick={normalBetHandler}
//                 className="w-full py-1.5 border-[1.5px] border-green-500 bg-green-600 text-white text-xs rounded-full font-bold hover:bg-green-700 transition-colors"
//               >
//                 BET
//                 <br />
//                 <span className="text-sm">{Number(betAmount).toFixed(2)}</span>
//               </button>
//               {isAuto && (
//                 <div className="flex items-center justify-center gap-1 mt-1 flex-wrap">
//                   <span className="text-[10px] text-gray">Auto Cash Out</span>
//                   <button>
//                     {isAutoBetAndCashout.autoCashout ? (
//                       <BiToggleRight
//                         onClick={() =>
//                           setIsAutoBetAndCashout((prev) => ({
//                             ...prev,
//                             autoCashout: false,
//                           }))
//                         }
//                         className="text-green-500"
//                         size={28}
//                       />
//                     ) : (
//                       <BiToggleLeft
//                         onClick={() =>
//                           setIsAutoBetAndCashout((prev) => ({
//                             ...prev,
//                             autoCashout: true,
//                           }))
//                         }
//                         className="text-gray-500"
//                         size={28}
//                       />
//                     )}
//                   </button>
//                   <input
//                     value={predictedCashoutValue}
//                     onChange={(e) => setPredictedCashoutValue(e.target.value)}
//                     className="bg-black text-gray-300 rounded-full px-2 w-16 py-0.5 text-[10px] text-center"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BetButtonTwo;
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { toast } from "react-toastify";
import { socket } from "./AviatorSocket";
import apis from "../utils/apis";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { configModalUsaWin } from "../utils/apis";
import { useProfile } from "../reusable_component/gameApi";

function BetButtonTwo({ setBtn, setBetApiHitted }) {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [betAmount, setBetAmount] = useState(1);
  const [betStatus, setBetStatus] = useState(false);
  const [isAuto, setIsAuto] = useState(false);
  const [predictedCashoutValue, setPredictedCashoutValue] = useState(1.1);
  const { myDetails } = useProfile(userId);

  const [isAutoBetAndCashout, setIsAutoBetAndCashout] = useState({
    autoBet: false,
    autoCashout: false,
  });
  const [hotAirData, setHotAirData] = useState(null);

  useEffect(() => {
    const handleSocket = (hotair) => {
      const q = JSON.parse(hotair);
      setHotAirData(q);
    };
    socket.on("demobdg_aviator", handleSocket);
    return () => socket.off("demobdg_aviator", handleSocket);
  }, []);

  const handleIncrement = () => setBetAmount((prev) => Number(prev) + 1);
  const handleDecrement = () =>
    setBetAmount((prev) => (prev > 1 ? Number(prev) - 1 : prev));
  const handleQuickBet = (amount) => setBetAmount(amount);

  const normalBetHandler = async () => {
    try {
      const loginTokenFromLocalStorage = localStorage.getItem("login_token");
      const response = await axios.get(`${apis.profile}${userId}`);
      const profileToken = response?.data?.data?.login_token;
      if (profileToken != loginTokenFromLocalStorage) {
        toast.error("Another user logged in");
        navigate("/login");
        return;
      }
      const sr =
        hotAirData?.status === 0 && hotAirData?.betTime < 10
          ? hotAirData?.period
          : hotAirData?.period + 1;
      const payload = {
        uid: userId,
        number: 2,
        amount: betAmount,
        game_id: 5,
        game_sr_num: sr,
      };
      try {
        const res = await axios.post(
          `${configModalUsaWin}aviator_bet`,
          payload
        );
        if (res?.data?.status === 200) {
          setBetApiHitted({ bet2: true });
          localStorage.setItem("aviatorBet2", "1");
          localStorage.setItem("aviatorsr2", sr);
          setBetStatus(true);
          setBetApiHitted({ cancel2: false });
          toast.success(res?.data?.message, {
            className: "custom-toast custom-toast-success",
          });
        } else {
          toast.warn(res?.data?.message, {
            className: "custom-toast custom-toast-warn",
          });
        }
      } catch (err) {
        if (err?.response?.data?.status === 500) {
          toast.error("Server problem");
        } else {
          toast.error(err?.response?.data?.message, {
            className: "custom-toast custom-toast-error",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      toast.error("Error fetching profile data");
    }
  };

  const cancelNormalBetHandler = async () => {
    const sr = localStorage.getItem("aviatorsr2");
    try {
      const res = await axios.get(
        `${configModalUsaWin}aviator_bet_cancel?userid=${userId}&number=2&gamesno=${sr}`
      );
      if (res?.data?.status === 200) {
        localStorage.setItem("aviatorBet2", "0");
        localStorage.setItem("aviatorsr2", "0");
        setBetStatus(false);
        setBetApiHitted({ cancel2: true });
        toast.success(res?.data?.message, {
          className: "custom-toast custom-toast-success",
        });
      } else {
        toast.warn(res?.data?.message, {
          className: "custom-toast custom-toast-warn",
        });
      }
    } catch (err) {
      if (err?.response?.data?.status === 500) {
        toast.error("Server problem");
      } else {
        toast.error(err?.response?.data?.message, {
          className: "custom-toast custom-toast-error",
        });
      }
    }
  };

  const cashoutNormalBetHandler = async () => {
    const sr = localStorage.getItem("aviatorsr2");
    const salt = {
      uid: userId,
      multiplier: hotAirData?.timer,
      game_sr_num: sr,
      number: 2,
    };
    const saltEncoded = btoa(JSON.stringify(salt));
    try {
      const res = await axios.post(
        `${configModalUsaWin}aviator_cashout?salt=${encodeURIComponent(
          saltEncoded
        )}`
      );
      if (res?.data?.status === 200) {
        localStorage.setItem("aviatorBet2", "0");
        localStorage.setItem("aviatorsr2", "0");
        setBetApiHitted({ cashout2: true });
        setBetStatus(false);
        toast.success(res?.data?.message, {
          className: "custom-toast custom-toast-success",
        });
      } else {
        toast.warn(res?.data?.message, {
          className: "custom-toast custom-toast-warn",
        });
      }
    } catch (err) {
      if (err?.response?.data?.status === 500) {
        toast.error("Server problem");
      } else {
        toast.error(err?.response?.data?.message, {
          className: "custom-toast custom-toast-error",
        });
      }
    }
  };

  useEffect(() => {
    const status = localStorage.getItem("aviatorBet2");
    if (status == 1) {
      setBetStatus(true);
    }
    if (hotAirData?.status === 2) {
      const lastBetRound = localStorage.getItem("aviatorsr2");
      const currentRound = Number(hotAirData?.period);
      if (lastBetRound != "0" && Number(lastBetRound) === currentRound) {
        localStorage.setItem("aviatorBet2", "0");
        localStorage.setItem("aviatorsr2", "0");
        setBetStatus(false);
      }
    }
  }, [hotAirData, betStatus]);

  useEffect(() => {
    if (
      isAuto &&
      isAutoBetAndCashout.autoBet &&
      hotAirData?.status === 0 &&
      hotAirData?.betTime == "9"
    ) {
      normalBetHandler();
    }
  }, [isAuto, isAutoBetAndCashout.autoBet, hotAirData]);

  useEffect(() => {
    if (
      isAuto &&
      isAutoBetAndCashout.autoCashout &&
      hotAirData?.status === 1 &&
      hotAirData?.timer == predictedCashoutValue
    ) {
      cashoutNormalBetHandler();
    }
  }, [isAuto, isAutoBetAndCashout.autoCashout, hotAirData]);

  useEffect(() => {
    setBtn((prevState) => ({
      ...prevState,
      btn2: isAuto,
    }));
  }, [isAuto]);

  useEffect(() => {
    const sr = hotAirData?.period;
    const lasteBetSrNo = Number(localStorage.getItem("aviatorsr2"));
    const aviatorBetStatus = Number(localStorage.getItem("aviatorBet2"));
    if (
      hotAirData?.status === 2 &&
      hotAirData?.betTime === 2 &&
      aviatorBetStatus === 1 &&
      lasteBetSrNo === sr
    ) {
      localStorage.setItem("aviatorsr2", "0");
      localStorage.setItem("aviatorBet2", "0");
      setBetStatus(false);
    }
  }, [hotAirData]);

  const isButtonDisabled = !betAmount || Number(betAmount) <= 0;

  return (
    <div className="w-full py-3 lg:w-1/2 px-3 bg-blackAviator2 rounded-xl border border-gray-800">
      {/* Bet/Auto Toggle - Improved Design */}
      <div className="flex w-full bg-black rounded-full p-1 mb-3">
        <button
          className={`flex-1 py-1.5 rounded-full text-center text-sm font-medium transition-all duration-300 ${
            !isAuto 
              ? "bg-linear-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/25" 
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setIsAuto(false)}
        >
          💰 Manual
        </button>
        <button
          className={`flex-1 py-1.5 rounded-full text-center text-sm font-medium transition-all duration-300 ${
            isAuto 
              ? "bg-linear-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/25" 
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setIsAuto(true)}
        >
          🔄 Auto
        </button>
      </div>

      {/* Main Content - Improved Layout */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Left Section - Amount Controls */}
        <div className="flex flex-col items-center w-full lg:w-[45%] gap-2">
          {/* Amount Input */}
          <div className="flex w-full bg-black items-center justify-between px-3 py-1 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
            <button 
              className="text-gray-400 hover:text-green-500 transition-colors p-1" 
              onClick={handleDecrement}
            >
              <FiMinusCircle size={22} />
            </button>
            
            <div className="flex flex-col items-center">
              <input
                inputMode="numeric"
                type="text"
                min="0"
                value={betAmount}
                onBeforeInput={(e) => {
                  if (!/^\d$/.test(e.data)) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  const numericVal = Number(val);
                  const wallet = Number(myDetails?.data?.total_wallet || 0);
                  if (numericVal <= wallet) {
                    setBetAmount(val);
                  }
                }}
                className="text-white text-xl font-bold bg-transparent text-center w-16 outline-none"
              />
              <span className="text-[9px] text-gray-500 -mt-0.5">AMOUNT</span>
            </div>
            
            <button 
              className="text-gray-400 hover:text-green-500 transition-colors p-1" 
              onClick={handleIncrement}
            >
              <FiPlusCircle size={22} />
            </button>
          </div>
          
          {/* Quick Bets */}
          <div className="flex gap-1.5 items-center justify-center flex-wrap w-full">
            {[100, 200, 500, 1000].map((amount) => (
              <button
                key={amount}
                className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all duration-200 ${
                  betAmount === amount 
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/30 scale-105" 
                    : "bg-blackAviator3 text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => handleQuickBet(amount)}
              >
                ₹{amount}
              </button>
            ))}
          </div>
          
          {/* Auto Bet Toggle */}
          {isAuto && (
            <div className="w-full flex items-center justify-center gap-2 mt-1 p-1.5 bg-black rounded-lg">
              <span className="text-[10px] text-gray-400 font-medium">Auto Bet</span>
              <button>
                {isAutoBetAndCashout.autoBet ? (
                  <BiToggleRight
                    onClick={() =>
                      setIsAutoBetAndCashout((prev) => ({
                        ...prev,
                        autoBet: false,
                      }))
                    }
                    className="text-green-500"
                    size={30}
                  />
                ) : (
                  <BiToggleLeft
                    onClick={() =>
                      setIsAutoBetAndCashout((prev) => ({
                        ...prev,
                        autoBet: true,
                      }))
                    }
                    className="text-gray-500"
                    size={30}
                  />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Right Section - Action Button */}
        <div className="w-full lg:w-[55%] flex items-stretch">
          {betStatus ? (
            hotAirData?.status === 1 &&
            Number(localStorage.getItem("aviatorsr2")) ===
              Number(hotAirData?.period) ? (
              // Cashout State
              <div className="w-full flex flex-col gap-1.5">
                <button
                  onClick={cashoutNormalBetHandler}
                  className="w-full flex-1 py-2.5 bg-linear-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.02] active:scale-95"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>💰 CASHOUT</span>
                    <span className="text-lg font-black">{(betAmount * hotAirData?.timer).toFixed(2)}</span>
                  </div>
                </button>
                {isAuto && (
                  <div className="flex items-center justify-center gap-1.5 bg-black rounded-lg p-1.5">
                    <span className="text-[9px] text-gray-400">Auto Cashout</span>
                    <button>
                      {isAutoBetAndCashout.autoCashout ? (
                        <BiToggleRight
                          onClick={() =>
                            setIsAutoBetAndCashout((prev) => ({
                              ...prev,
                              autoCashout: false,
                            }))
                          }
                          className="text-green-500"
                          size={24}
                        />
                      ) : (
                        <BiToggleLeft
                          onClick={() =>
                            setIsAutoBetAndCashout((prev) => ({
                              ...prev,
                              autoCashout: true,
                            }))
                          }
                          className="text-gray-500"
                          size={24}
                        />
                      )}
                    </button>
                    <input
                      value={predictedCashoutValue}
                      onChange={(e) => setPredictedCashoutValue(e.target.value)}
                      className="bg-blackAviator3 text-white rounded-lg px-2 w-14 py-0.5 text-[10px] text-center outline-none border border-gray-600 focus:border-green-500 transition-colors"
                    />
                  </div>
                )}
              </div>
            ) : (
              // Cancel State
              <div className="w-full flex flex-col gap-1.5">
                {hotAirData?.status === 1 && (
                  <p className="text-red-400 text-[10px] text-center animate-pulse">
                    ⏳ Waiting for next round
                  </p>
                )}
                <button
                  onClick={cancelNormalBetHandler}
                  className="w-full flex-1 py-2.5 bg-linear-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-[1.02] active:scale-95"
                >
                  ❌ CANCEL BET
                </button>
                {isAuto && (
                  <div className="flex items-center justify-center gap-1.5 bg-black rounded-lg p-1.5">
                    <span className="text-[9px] text-gray-400">Auto Cashout</span>
                    <button>
                      {isAutoBetAndCashout.autoCashout ? (
                        <BiToggleRight
                          onClick={() =>
                            setIsAutoBetAndCashout((prev) => ({
                              ...prev,
                              autoCashout: false,
                            }))
                          }
                          className="text-green-500"
                          size={24}
                        />
                      ) : (
                        <BiToggleLeft
                          onClick={() =>
                            setIsAutoBetAndCashout((prev) => ({
                              ...prev,
                              autoCashout: true,
                            }))
                          }
                          className="text-gray-500"
                          size={24}
                        />
                      )}
                    </button>
                    <input
                      value={predictedCashoutValue}
                      onChange={(e) => setPredictedCashoutValue(e.target.value)}
                      className="bg-blackAviator3 text-white rounded-lg px-2 w-14 py-0.5 text-[10px] text-center outline-none border border-gray-600 focus:border-red-500 transition-colors"
                    />
                  </div>
                )}
              </div>
            )
          ) : (
            // Bet State
            <div className="w-full flex flex-col gap-1.5">
              <button
                onClick={normalBetHandler}
                disabled={isButtonDisabled}
                className={`w-full flex-1 py-2.5 bg-linear-to-r from-green-600 to-emerald-500 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.02] active:scale-95 ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>🚀 PLACE BET</span>
                  <span className="text-lg font-black">₹{Number(betAmount).toFixed(2)}</span>
                </div>
              </button>
              {isAuto && (
                <div className="flex items-center justify-center gap-1.5 bg-black rounded-lg p-1.5">
                  <span className="text-[9px] text-gray-400">Auto Cashout</span>
                  <button>
                    {isAutoBetAndCashout.autoCashout ? (
                      <BiToggleRight
                        onClick={() =>
                          setIsAutoBetAndCashout((prev) => ({
                            ...prev,
                            autoCashout: false,
                          }))
                        }
                        className="text-green-500"
                        size={24}
                      />
                    ) : (
                      <BiToggleLeft
                        onClick={() =>
                          setIsAutoBetAndCashout((prev) => ({
                            ...prev,
                            autoCashout: true,
                          }))
                        }
                        className="text-gray-500"
                        size={24}
                      />
                    )}
                  </button>
                  <input
                    value={predictedCashoutValue}
                    onChange={(e) => setPredictedCashoutValue(e.target.value)}
                    className="bg-blackAviator3 text-white rounded-lg px-2 w-14 py-0.5 text-[10px] text-center outline-none border border-gray-600 focus:border-green-500 transition-colors"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BetButtonTwo;