import { Link, useLocation } from "react-router-dom";
import { Home, CreditCard, Crown, User } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: "HOME",
      path: "/",
    },
    {
      icon: CreditCard,
      label: "DEPOSIT",
      path: "/deposit",
    },
    {
      icon: Crown,
      label: "VIP",
      path: "/vip",
    },
    {
      icon: User,
      label: "PROFILE",
      path: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">

      <div
        className="
          relative
          p-px
          rounded-[26px]
          bg-gradient-to-r
          from-cyan-500/30
          via-yellow-500/20
          to-red-500/30
        "
      >
        <div
          className="
            bg-[#070707]/95
            backdrop-blur-xl

            rounded-[26px]

            px-3
            py-2

            w-[360px]
          "
        >
          <div className="flex justify-between items-center">

            {navItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center

                    h-14
                    w-20
                  "
                >
                  {/* Sliding Background */}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                      className="
                        absolute
                        inset-0

                        rounded-2xl

                        bg-gradient-to-b
                        from-yellow-500/35
                        to-yellow-500/5

                        border
                        border-yellow-500/20

                        shadow-[0_0_25px_rgba(248,180,0,.25)]
                      "
                    />
                  )}

                  {/* Icon */}

                  <motion.div
                    animate={{
                      scale: isActive
                        ? 1.2
                        : 1,
                      y: isActive
                        ? -2
                        : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`
                      relative z-10

                      ${
                        isActive
                          ? "text-[#F8B400]"
                          : "text-gray-500"
                      }
                    `}
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Label */}

                  <span
                    className={`
                      relative z-10

                      text-[10px]
                      font-semibold
                      mt-1

                      ${
                        isActive
                          ? "text-[#F8B400]"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Glowing Dot */}

                  {isActive && (
                    <motion.div
                      layoutId="dot"
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      className="
                        absolute
                        bottom-1

                        w-1.5
                        h-1.5

                        rounded-full

                        bg-yellow-400

                        shadow-[0_0_12px_rgba(255,200,0,.9)]
                      "
                    />
                  )}
                </Link>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}