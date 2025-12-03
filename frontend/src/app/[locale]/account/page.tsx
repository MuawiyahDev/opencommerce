import StatCard from "@/components/feature/account/dashboard/StatCard";
import { convertNumberToLocale } from "@/lib/convertNumberToLocale";
import { formatPriceByLocale } from "@/lib/formatPriceByLocale";
import {
  Banknote,
  Calendar,
  Database,
  Heart,
  Package,
  RotateCw,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const AccountPage = () => {
  const locale = useLocale();
  const t = useTranslations("account.dashboard");

  const stats = [
    {
      icon: Banknote,
      value: formatPriceByLocale(23500, locale).formatted, // total money spent by the customer
      label: t("totalSpent"),
      color: "green",
    },
    {
      icon: Database,
      value: convertNumberToLocale(128, locale), // total orders placed
      label: t("totalOrders"),
      color: "blue",
    },
    {
      icon: Banknote,
      value: formatPriceByLocale(184, locale).formatted, // average spend per order
      label: t("averageSpendPerOrder"),
      color: "purple",
    },
    {
      icon: Calendar,
      value: formatPriceByLocale(1200, locale).formatted, // average spend per month
      label: t("averageSpendPerMonth"),
      color: "orange",
    },
    {
      icon: Package,
      value: convertNumberToLocale(5, locale), // number of pending deliveries
      label: t("pendingDeliveries"),
      color: "red",
    },
    {
      icon: Truck,
      value: convertNumberToLocale(123, locale), // number of delivered orders
      label: t("ordersDelivered"),
      color: "teal",
    },
    {
      icon: RotateCw,
      value: convertNumberToLocale(4, locale), // number of returned orders
      label: t("ordersReturned"),
      color: "gray",
    },
    {
      icon: ShoppingCart,
      value: convertNumberToLocale(12, locale), // number of items in cart
      label: t("itemsInCart"),
      color: "indigo",
    },
    {
      icon: Heart,
      value: convertNumberToLocale(4, locale), // number of items in wishlist
      label: t("itemsInWishlists"),
      color: "rose",
    },
  ];

  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AccountPage;
