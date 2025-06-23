import React from "react";
import { TOP_BAR_LINKS } from "@/constants";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import ContactItem from "./ContactItem";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { formatPhoneNumberByLang } from "@/lib/formatPhoneNumberByLang";
import { twMerge } from "tailwind-merge";
import { rtlLocales } from "@/i18n/routing";

const Topbar = () => {
  const t = useTranslations("topbar");
  const locale = useLocale();
  const isRtl = rtlLocales.includes(locale);

  return (
    <div className="bg-gray-900 text-gray-300 py-3">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <ContactItem
              href="tel:+8801914513373"
              icon={Phone}
              text={formatPhoneNumberByLang("+8801914513373", locale)}
            />
            <ContactItem
              href="mailto:info@example.com"
              icon={Mail}
              text="info@example.com"
              className="hidden sm:flex"
            />
          </div>

          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-5 text-xs">
              {TOP_BAR_LINKS.map((link) => (
                <Link href={link.href} key={link.href}>
                  {t(link.textKey)}
                </Link>
              ))}
            </div>

            <div
              className={twMerge(
                "border-gray-700",
                isRtl ? "pr-5 mr-5 border-r" : "pl-5 ml-5 border-l"
              )}
            >
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
