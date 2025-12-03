// languageToCurrency.json should be imported as a JSON
import languageToCurrencyJson from "@/data/languageToCurrency.json";
import { rtlLocales } from "@/i18n/routing";

type Currency = {
  code: string;
  symbol: string;
  name: string;
};

type LanguageCurrencyMap = {
  [lang: string]: Currency;
};

// Cast JSON as LanguageCurrencyMap to avoid TS error
const languageToCurrency: LanguageCurrencyMap = languageToCurrencyJson;

type FormatPriceResult = {
  formatted: string;
  symbol: string;
  code: string;
  name: string;
};

export function formatPriceByLocale(
  price: number | string,
  locale: string, // e.g., "en", "bn", "fr-FR"
  symbolPosition: "auto" | "before" | "after" = "auto"
): FormatPriceResult {
  // Extract language code if full locale (en-US → en)
  const langCode = locale.includes("-")
    ? locale.split("-")[0].toLowerCase()
    : locale.toLowerCase();

  // Get currency info for this language, fallback to English/USD
  const currency: Currency =
    languageToCurrency[langCode] || languageToCurrency["en"];

  // Format number without currency
  const formattedNumber = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price));

  // Determine final formatted string
  let formatted: string;

  if (rtlLocales.includes(locale)) {
    symbolPosition = "after";
  } else {
    symbolPosition = "before";
  }

  if (symbolPosition === "before") {
    formatted = `${currency.symbol}${formattedNumber}`;
  } else if (symbolPosition === "after") {
    formatted = `${formattedNumber}${currency.symbol}`;
  } else {
    // auto: use Intl.NumberFormat with currency to follow locale rules
    formatted = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency.code,
    }).format(Number(price));
  }

  return {
    formatted,
    symbol: currency.symbol,
    code: currency.code,
    name: currency.name,
  };
}
