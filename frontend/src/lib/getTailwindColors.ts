import tailwindColors from "@/data/tailwindColors.json";

export const getTailwindBg = (
  color: keyof typeof tailwindColors,
  shade: keyof (typeof tailwindColors)["slate"]
) => {
  return tailwindColors[color]?.[shade] || "bg-gray-400";
};

export const getTailwindText = (
  color: keyof typeof tailwindColors,
  shade: keyof (typeof tailwindColors)["slate"]
) => {
  return (tailwindColors[color]?.[shade] || "bg-gray-400").replace(
    "bg-",
    "text-"
  );
};
