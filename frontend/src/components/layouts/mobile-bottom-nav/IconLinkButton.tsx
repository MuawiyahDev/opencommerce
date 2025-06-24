import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface IconLinkButtonProps {
  href: string;
  icon: LucideIcon;
  className?: string;
}

const IconLinkButton = ({
  href,
  icon: Icon,
  className,
}: IconLinkButtonProps) => {
  const baseClass =
    "bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full";
  const mergedClassName = twMerge(baseClass, className);

  return (
    <Link href={href} className={mergedClassName}>
      <Icon size={20} />
    </Link>
  );
};

export default IconLinkButton;
