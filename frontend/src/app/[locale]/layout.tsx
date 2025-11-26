import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, rtlLocales } from "@/i18n/routing";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import Header from "@/components/layouts/Header";
import MobileBottomNav from "@/components/layouts/MobileBottomNav";
import Footer from "@/components/layouts/Footer";

const font = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenCommerce",
  description: "",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={`${font.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          <main className="pb-[calc(64px_+_12px_+_20px)] mt-5">{children}</main>
          <Footer />
          <MobileBottomNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
