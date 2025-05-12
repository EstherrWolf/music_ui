import { LoginForm } from "@/components/login/LoginForm";
import { RegisterForm } from "@/components/register/RegisterForm";
import { useState } from "react";

export default function LoginPage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  return (
    <div className="min-h-[88vh] flex bg-[url('/login-bg.jpg')] bg-cover bg-center">
      <div className="w-1/2 relative hidden lg:flex">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="z-10 p-12 text-white self-center">
          <h1 className="text-4xl font-bold mb-4">SoundClient</h1>
          <p className="text-lg mb-1">
            Comprehensive music management solution
          </p>
          <p className="italic text-sm mt-4">
            “Stream music seamlessly – Discover new tracks – Manage your
            playlists from start to finish.”
          </p>
        </div>
      </div>
      {isLoginFormVisible ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
