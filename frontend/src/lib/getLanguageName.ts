import rawLanguageNames from "@/data/languageNames.json";

const languageNames: Record<string, string> = rawLanguageNames;

export function getLanguageName(langCode: string): string {
  return languageNames[langCode] || langCode;
}
