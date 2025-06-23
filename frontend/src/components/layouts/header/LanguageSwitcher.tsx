"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getCountryCodeFromLanguage } from "@/lib/getCountryCodeFromLanguage";
import { getLanguageName } from "@/lib/getLanguageName";
import { ChevronDown } from "lucide-react";
import { routing, rtlLocales } from "@/i18n/routing";
import { twMerge } from "tailwind-merge";
import { Link } from "@/i18n/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="flex items-center gap-2 text-xs cursor-pointer"
          dir={dir}
        >
          <Image
            src={`https://flagcdn.com/w20/${getCountryCodeFromLanguage(
              locale
            )?.toLowerCase()}.png`}
            alt=""
            width={20}
            height={20}
          />

          <div className="flex items-center gap-1 select-none">
            <span>{getLanguageName(locale)}</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {routing.locales.map((lang) => (
          <Link href="/" locale={lang} key={lang}>
            <DropdownMenuItem
              className={twMerge(
                "flex items-center gap-2 text-xs",
                locale === lang && "!bg-primary !text-white"
              )}
              dir={dir}
            >
              <Image
                src={`https://flagcdn.com/w20/${getCountryCodeFromLanguage(
                  lang
                )?.toLowerCase()}.png`}
                alt=""
                width={20}
                height={20}
              />
              <span>{getLanguageName(lang)}</span>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
