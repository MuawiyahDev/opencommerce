import React from "react";
import { useTranslations } from "next-intl";
import Sidebar from "@/components/feature/account/Sidebar";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("account");

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-10">{t("title")}</h1>

      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[400px]">
          <Sidebar />
        </div>
        <div className="lg:w-[calc(100%_-_400px)]">{children}</div>
      </div>
    </div>
  );
};

export default AccountLayout;
