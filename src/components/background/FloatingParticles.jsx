import { Dice5 } from "lucide-react";

export default function FloatingParticles() {
  const particles = [
    {
      position: "top-20 left-20",
      size: 22,
      duration: "6s",
      delay: "0s",
    },
    {
      position: "top-[55%] left-12",
      size: 18,
      duration: "7s",
      delay: "1s",
    },
    {
      position: "bottom-16 left-[30%]",
      size: 28,
      duration: "8s",
      delay: "2s",
    },
    {
      position: "top-28 right-24",
      size: 20,
      duration: "5s",
      delay: "1.5s",
    },
    {
      position: "bottom-24 right-12",
      size: 18,
      duration: "7s",
      delay: "0.5s",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes particleFloatGlow {
            0%,100% {
              transform: translateY(0px) scale(.9);
              opacity: .15;
              filter: drop-shadow(0 0 2px rgba(255,184,0,.15));
            }

            50% {
              transform: translateY(-12px) scale(1.08);
              opacity: .95;
              filter: drop-shadow(0 0 18px rgba(255,184,0,.9));
            }
          }
        `}
      </style>

      {particles.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position}`}
          style={{
            animation: `particleFloatGlow ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          {/* Glow Orb */}
          <div
            className="
              absolute
              -inset-2
              rounded-full
              bg-yellow-500/20
              blur-xl
            "
          />

          {/* Dice */}
          <Dice5
            size={item.size}
            className="
              relative
              text-yellow-400/40
            "
          />
        </div>
      ))}
    </>
  );
}