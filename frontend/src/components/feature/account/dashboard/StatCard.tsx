import React from "react";
import { twMerge } from "tailwind-merge";
import { getTailwindBg } from "@/lib/getTailwindColors";
import tailwindColors from "@/data/tailwindColors.json";

interface StatCardProps {
  icon: React.ElementType;
  value: React.ReactNode;
  label: string;
  color?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  value,
  label,
  color = "teal",
  className,
}) => {
  const bgColor = getTailwindBg(color as keyof typeof tailwindColors, "400"); // e.g. "bg-teal-400"

  return (
    <div
      className={twMerge(
        "shadow-custom p-4 flex items-center gap-3.5 rounded-md",
        className
      )}
    >
      <div
        className={twMerge(
          "size-12 min-w-12 rounded-full flex items-center justify-center text-white",
          bgColor
        )}
      >
        <Icon size={28} />
      </div>

      <div>
        <span className="font-medium block mb-0.5">{value}</span>
        <span className="text-gray-500 uppercase text-xs block">{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
