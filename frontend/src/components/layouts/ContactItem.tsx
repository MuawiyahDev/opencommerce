import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type ContactItemProps = {
  href: string;
  icon: LucideIcon;
  text: string;
  className?: string;
};

const ContactItem: React.FC<ContactItemProps> = ({
  href,
  icon: Icon,
  text,
  className,
}) => {
  return (
    <Link
      href={href}
      className={twMerge("flex items-center gap-2 text-xs", className)}
    >
      <Icon size={16} />
      <span>{text}</span>
    </Link>
  );
};

export default ContactItem;
