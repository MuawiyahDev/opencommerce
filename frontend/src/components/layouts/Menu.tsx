"use client";
import { MENU_LINKS } from "@/constants";
import { formatPhoneNumberByLang } from "@/lib/formatPhoneNumberByLang";
import { PhoneCall } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

const Menu = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("menu");

  return (
    <div className="border-b py-3">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <div>
            <ul className="flex items-center gap-8">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={twMerge(
                      "font-semibold transition hover:text-primary",
                      pathname.includes(link.href) && "text-primary"
                    )}
                  >
                    {t(link.textKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <PhoneCall className="text-primary" />

            <div>
              <span className="block text-xs text-gray-500 font-semibold">
                {t("hotline")}:
              </span>
              <span className="block text-sm font-semibold">
                {formatPhoneNumberByLang("+8801914513373", locale)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
