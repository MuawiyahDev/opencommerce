import { Link, usePathname } from "@/i18n/navigation";
import { ChevronRight, LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

interface SidebarLinkProps {
  href: string;
  textKey: string;
  icon: LucideIcon;
  className?: string;
}

const SidebarLink = ({
  href,
  textKey,
  icon: Icon,
  className,
}: SidebarLinkProps) => {
  const t = useTranslations("account.sidebar");
  const pathname = usePathname();

  const baseClass =
    "flex items-center justify-between transition hover:text-primary group";
  const mergedClassName = twMerge(
    baseClass,
    className,
    pathname === href && "text-primary"
  );

  return (
    <li>
      <Link href={href} className={mergedClassName}>
        <span className="flex items-center gap-2 text-sm">
          <Icon size={24} strokeWidth={1.6} /> {t(textKey)}
        </span>

        <ChevronRight
          size={24}
          strokeWidth={1.6}
          className={twMerge(
            "text-gray-500 transition group-hover:text-gray-900",
            pathname === href && "text-gray-900"
          )}
        />
      </Link>
    </li>
  );
};

export default SidebarLink;
