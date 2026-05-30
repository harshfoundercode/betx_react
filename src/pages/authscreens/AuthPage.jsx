import AuthCard from "../../components/auth/AuthCard";
import AnimatedGrid from "../../components/background/AnimatedGrid";
import AmbientGlow from "../../components/background/AmbientGlow";
import FloatingParticles from "../../components/background/FloatingParticles";
import AuthLogo from "./AuthLogo";

export default function AuthPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
  <AnimatedGrid />
  <FloatingParticles />

  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 gap-3">
  <AuthLogo />
  <AuthCard />
</div>
</div>
  );
}