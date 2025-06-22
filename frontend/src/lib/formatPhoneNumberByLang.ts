import { CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";
import countryMap from "@/data/languageToCountry.json"; // your JSON file
import { convertNumberToLocale } from "./convertNumberToLocale";

type LangCode = keyof typeof countryMap;

// Converts localized digits (Bengali, Arabic, etc.) to Latin digits
function convertToLatinDigits(input: string): string {
  return input.replace(/[^\d]/g, (char) => {
    const code = char.charCodeAt(0);

    const digitRanges = [
      { start: 0x0660, end: 0x0669 }, // Arabic-Indic
      { start: 0x06f0, end: 0x06f9 }, // Extended Arabic-Indic
      { start: 0x0966, end: 0x096f }, // Devanagari
      { start: 0x09e6, end: 0x09ef }, // Bengali
      { start: 0x0e50, end: 0x0e59 }, // Thai
      { start: 0x1040, end: 0x1049 }, // Myanmar
    ];

    for (const { start, end } of digitRanges) {
      if (code >= start && code <= end) {
        return String(code - start);
      }
    }

    return char;
  });
}

// Main exported function: format phone number by language code
export function formatPhoneNumberByLang(
  rawInput: string,
  langCode: string
): string {
  const key = langCode.toLowerCase() as LangCode;

  // Explicitly cast the country code string to CountryCode type
  const countryCode = (countryMap[key] ?? "US") as CountryCode;

  const normalized = convertToLatinDigits(rawInput);
  const phoneNumber = parsePhoneNumberFromString(normalized, countryCode);

  if (!phoneNumber) return rawInput;

  const formatted = phoneNumber.formatInternational();

  return formatted.replace(/\d+/g, (digits) =>
    convertNumberToLocale(digits, langCode)
  );
}
