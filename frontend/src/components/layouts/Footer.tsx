import Link from "next/link";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { convertNumberToLocale } from "@/lib/convertNumberToLocale";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const footerLinks = [
    {
      title: t("footer.shop"),
      links: [
        { name: t("menu.products"), href: "/products" },
        { name: t("menu.categories"), href: "/categories" },
        { name: t("menu.brands"), href: "/brands" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-6 py-12 pb-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.svg"
            alt=""
            width={215}
            height={30}
            className="w-auto h-[30px]"
          />
        </div>

        {/* Navigation Sections */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.contact")}
          </h3>
          <div className="flex items-center text-sm mb-2">
            <Phone className="h-5 w-5 mr-2" />
            <span>+1 (800) 123-4567</span>
          </div>
          <div className="flex items-center text-sm mb-4">
            <Mail className="h-5 w-5 mr-2" />
            <span>support@shopmate.com</span>
          </div>
          <div className="flex space-x-4 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        &copy;{" "}
        {convertNumberToLocale(new Date().getFullYear().toString(), locale)}{" "}
        OpenCommerce. {t("footer.allRightsReserved")}.
      </div>
    </footer>
  );
}
