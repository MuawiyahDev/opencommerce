import React from "react";
import { LoginForm } from "@/components/feature/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="container py-6">
      <div className="w-full max-w-sm mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
