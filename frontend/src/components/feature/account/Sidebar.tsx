"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CUSTOMER_ACCOUNT_SIDEBAR_LINKS } from "@/constants";
import SidebarLink from "./sidebar/SidebarLink";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const t = useTranslations("account.sidebar");

  return (
    <div className="bg-white shadow-custom p-4 rounded-md">
      <div className="flex items-center gap-4">
        <Avatar className="size-14">
          <AvatarImage src="https://avatars.githubusercontent.com/u/115263823?v=4" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>

        <div className="space-y-0.5">
          <p className="text-gray-500 text-sm">{t("welcome")}</p>
          <h4 className="text-base font-medium">Muhammad Muawiyah</h4>
        </div>
      </div>

      <ul className="border-t mt-5 pt-5 space-y-4">
        {CUSTOMER_ACCOUNT_SIDEBAR_LINKS.map((link) => (
          <SidebarLink
            key={link.href}
            textKey={link.textKey}
            href={link.href}
            icon={link.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
