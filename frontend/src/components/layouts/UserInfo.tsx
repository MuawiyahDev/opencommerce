import { UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const t = useTranslations("navbar.userInfo");

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="border w-11 h-11 rounded-full flex items-center justify-center text-gray-500">
        <UserRound />
      </div>

      <div>
        <span className="block text-gray-500 text-xs font-semibold mb-0.5">
          {t("greeting")}
        </span>
        <span className="block text-sm font-semibold">{t("account")}</span>
      </div>
    </Link>
  );
};

export default UserInfo;
