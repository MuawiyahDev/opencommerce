import React from "react";
import { RegistrationForm } from "@/components/feature/auth/RegistrationForm";

const RegisterPage = () => {
  return (
    <div className="container py-6">
      <div className="w-full max-w-sm mx-auto">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;
