import languageToCountry from "@/data/languageToCountry.json";

const countryMap: Record<string, string> = languageToCountry;

export function getCountryCodeFromLanguage(lang: string): string | null {
  const baseLang = lang.split("-")[0].toLowerCase();
  return countryMap[baseLang] || null;
}
