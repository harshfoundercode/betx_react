import axios from "axios";
import { useEffect, useState } from "react";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { toast } from "react-toastify";
import apis from "../utils/apis";
import { socket } from "./AviatorSocket";
import { useProfile } from "../reusable_component/gameApi";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { configModalUsaWin } from "../utils/apis";

function BetButtonOne({ setBtn, setBetApiHitted }) {
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
    socket.on("betx_aviator", handleSocket);
    return () => socket.off("betx_aviator", handleSocket);
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
        number: 1,
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
          localStorage.setItem("aviatorBet1", "1");
          localStorage.setItem("aviatorsr1", sr);
          setBetApiHitted({ bet1: true });
          setBetApiHitted({ cancel1: false });
          toast.success(res?.data?.message, {
            className: "custom-toast custom-toast-success",
          });
          setBetStatus(true);
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
    const sr = localStorage.getItem("aviatorsr1");
    try {
      const res = await axios.get(
        `${configModalUsaWin}aviator_bet_cancel?userid=${userId}&number=1&gamesno=${sr}`
      );
      if (res?.data?.success === true || res?.data?.status === 200) {
        localStorage.setItem("aviatorBet1", "0");
        localStorage.setItem("aviatorsr1", "0");
        setBetApiHitted({ cancel1: true });
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

  const cashoutNormalBetHandler = async () => {
    const sr = localStorage.getItem("aviatorsr1");
    const salt = {
      uid: userId,
      multiplier: hotAirData?.timer,
      game_sr_num: sr,
      number: 1,
    };
    const saltEncoded = btoa(JSON.stringify(salt));
    try {
      const res = await axios.post(
        `${configModalUsaWin}aviator_cashout?salt=${encodeURIComponent(
          saltEncoded
        )}`
      );
      if (res?.data?.status === 200) {
        setBetApiHitted({ cashout1: true });
        localStorage.setItem("aviatorBet1", "0");
        localStorage.setItem("aviatorsr1", "0");
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
    const status = localStorage.getItem("aviatorBet1");
    if (status == 1) {
      setBetStatus(true);
    }
    if (hotAirData?.status === 2) {
      const lastBetRound = localStorage.getItem("aviatorsr1");
      const currentRound = Number(hotAirData?.period);
      if (lastBetRound != "0" && Number(lastBetRound) === currentRound) {
        localStorage.setItem("aviatorBet1", "0");
        localStorage.setItem("aviatorsr1", "0");
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
      btn1: isAuto,
    }));
  }, [isAuto]);

  useEffect(() => {
    const sr = hotAirData?.period;
    const lasteBetSrNo = Number(localStorage.getItem("aviatorsr1"));
    const aviatorBetStatus = Number(localStorage.getItem("aviatorBet1"));
    if (
      hotAirData?.status === 2 &&
      hotAirData?.betTime === 2 &&
      aviatorBetStatus === 1 &&
      lasteBetSrNo === sr
    ) {
      localStorage.setItem("aviatorsr1", "0");
      localStorage.setItem("aviatorBet1", "0");
      setBetStatus(false);
    }
  }, [hotAirData]);

  // Determine if button should be disabled
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
        {/* Left Section - Amount Controls - IMPROVED */}
        <div className="flex flex-col items-center w-full lg:w-[45%] gap-2">
          {/* Amount Input - IMPROVED */}
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
                  const incomingValue = e.target.value + e.data;
                  const wallet = Number(myDetails?.data?.total_wallet || 0);
                  const isValid = /^\d+$/.test(incomingValue);
                  const numericVal = Number(incomingValue);
                  if (!isValid || numericVal > wallet) {
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
          
          {/* Quick Bets - IMPROVED with better styling */}
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
          
          {/* Auto Bet Toggle - IMPROVED */}
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

        {/* Right Section - Action Button - IMPROVED */}
        <div className="w-full lg:w-[55%] flex items-stretch">
          {betStatus ? (
            hotAirData?.status === 1 &&
            Number(localStorage.getItem("aviatorsr1")) ===
              Number(hotAirData?.period) ? (
              // Cashout State - IMPROVED
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
              // Cancel State - IMPROVED
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
            // Bet State - IMPROVED
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

export default BetButtonOne;