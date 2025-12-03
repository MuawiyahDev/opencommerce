"use client";

import React from "react";
import IconLinkButton from "./mobile-bottom-nav/IconLinkButton";
import { usePathname } from "next/navigation";
import { MOBILE_BOTTOM_NAV_LINKS } from "@/constants";

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-3 left-0 right-0 z-50 flex items-center justify-center lg:hidden max-w-md container">
      <div className="w-full shadow-custom rounded-full bg-white p-3">
        <div className="flex items-center justify-between gap-3">
          {MOBILE_BOTTOM_NAV_LINKS.map((link) => (
            <IconLinkButton
              key={link.href}
              href={link.href}
              icon={link.icon}
              className={
                pathname.includes(link.href)
                  ? "bg-primary text-white shadow-sm shadow-primary"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
