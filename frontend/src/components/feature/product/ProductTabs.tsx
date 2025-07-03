import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Specification from "./product-tabs/Specification";
import Description from "./product-tabs/Description";
import { useLocale, useTranslations } from "next-intl";
import { rtlLocales } from "@/i18n/routing";

const ProductTabs = () => {
  const t = useTranslations("productDetail.productTabs");
  const locale = useLocale();
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  const defaultTab = "specification";
  const tabs = [
    {
      label: t("specification"),
      value: "specification",
      component: <Specification />,
    },
    {
      label: t("description"),
      value: "description",
      component: <Description />,
    },
    {
      label: t("questions"),
      value: "questions",
      component: <></>,
    },
    {
      label: t("reviews"),
      value: "reviews",
      component: <></>,
    },
  ];

  return (
    <div className="py-14 mt-14 bg-gray-100">
      <div className="container">
        <Tabs defaultValue={defaultTab} dir={dir}>
          <TabsList className="gap-3 flex-wrap h-full sm:h-12">
            {tabs.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="px-4 bg-background shadow-sm data-[state=active]:bg-primary data-[state=active]:text-white transition"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((item) => (
            <TabsContent key={item.value} value={item.value}>
              {item.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabs;
