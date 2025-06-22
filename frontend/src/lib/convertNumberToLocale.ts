import numberingSystems from "@/data/numberingSystems.json";

// Add a type for the mapping
type NumberingSystemMap = {
  [langCode: string]: string;
};

const systemMap: NumberingSystemMap = numberingSystems;

export function convertNumberToLocale(
  num: number | string,
  locale: string
): string {
  const langCode = locale.split("-")[0].toLowerCase();
  const numberingSystem = systemMap[langCode] || "latn";
  const fullLocale = `${locale}-u-nu-${numberingSystem}`;

  return new Intl.NumberFormat(fullLocale, {
    useGrouping: false,
  }).format(Number(num));
}
