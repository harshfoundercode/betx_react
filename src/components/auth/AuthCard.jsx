import { useState } from "react";
import AuthLogo from "../../pages/authscreens/AuthLogo";
import AuthTabs from "../../pages/authscreens/AuthTab";
import SecurityBanner from "../../pages/authscreens/SecurityPage";
import LoginForm from "../../pages/LoginScreen";
import RegisterForm from "../../pages/RegisterScreen";
import AuthFooter from "../../pages/services/AuthFooter";

export default function AuthCard() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div
      className="
      w-full
      max-w-[390px]
      rounded-[28px]
      border border-yellow-500/10
      bg-[#0D1322]/80
      backdrop-blur-xl
      p-4
      shadow-[0_0_60px_rgba(255,184,0,.08)]

      

    "
    >


      <AuthTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <SecurityBanner />

      <div className="mt-5">
        {activeTab === "login" ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </div>

      {/* <AuthFooter /> */}
    </div>
  );
}