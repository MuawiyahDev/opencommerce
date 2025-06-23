import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface BadgeIconProps {
  href: string;
  icon: LucideIcon;
  count?: string;
  className?: string;
  badgeColor?: string;
}

const BadgeIcon: React.FC<BadgeIconProps> = ({
  href,
  icon: Icon,
  count = 0,
  className = "",
  badgeColor = "bg-rose-500",
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center relative",
        className
      )}
    >
      <Icon size={20} />

      {count && (
        <div
          className={twMerge(
            "absolute -top-[5px] -right-[5px] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center",
            badgeColor
          )}
        >
          {count}
        </div>
      )}
    </Link>
  );
};

export default BadgeIcon;
