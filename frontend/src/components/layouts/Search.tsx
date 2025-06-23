import { rtlLocales } from "@/i18n/routing";
import { SearchIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

const Search = () => {
  const locale = useLocale();
  const t = useTranslations("navbar");
  const isRtl = rtlLocales.includes(locale);

  return (
    <div className="border h-12 rounded-md px-3 flex items-center w-full relative">
      <div
        className={twMerge(
          "h-full",
          isRtl ? "pl-3 ml-3 border-l" : "pr-3 mr-3 border-r"
        )}
      >
        <select className="pr-2 h-full outline-none font-semibold text-sm">
          <option value="">{t("allCategories")}</option>
        </select>
      </div>

      <input
        type="text"
        className={twMerge(
          "h-full w-full outline-none text-sm font-medium",
          isRtl ? "pl-6" : "pr-6"
        )}
        placeholder={t("searchPlaceholder")}
      />

      <button
        className={twMerge(
          "absolute top-1/2 -translate-y-1/2 text-gray-500",
          isRtl ? "left-3 right-auto" : "right-3 left-auto"
        )}
      >
        <SearchIcon size={18} />
      </button>
    </div>
  );
};

export default Search;
