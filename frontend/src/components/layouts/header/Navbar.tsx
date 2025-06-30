"use client";

import Image from "next/image";
import React from "react";
import Search from "./Search";
import UserInfo from "./UserInfo";
import { Heart, ShoppingBasket } from "lucide-react";
import BadgeIcon from "./BadgeIcon";
import { convertNumberToLocale } from "@/lib/convertNumberToLocale";
import { useLocale } from "next-intl";
import { useScroll } from "@/hooks/useScroll";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const locale = useLocale();
  const { isScrolled } = useScroll(100);

  return (
    <nav
      className={twMerge(
        "py-5 bg-white sticky top-0 z-50 transition",
        isScrolled ? "shadow-custom" : "border-b"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <div>
            <Image
              src="/logo.svg"
              alt=""
              width={215}
              height={30}
              className="w-auto h-[30px]"
            />
          </div>

          <div className="lg:max-w-[500px] w-full hidden md:block max-w-[400px]">
            <Search />
          </div>

          <div className="flex items-center xl:gap-10 gap-4">
            <div className="hidden lg:block">
              <UserInfo />
            </div>

            <div className="flex gap-4">
              <BadgeIcon
                href="/wishlist"
                icon={Heart}
                count={convertNumberToLocale(3, locale)}
                badgeColor="bg-rose-500"
              />
              <BadgeIcon
                href="/cart"
                icon={ShoppingBasket}
                count={convertNumberToLocale(5, locale)}
                badgeColor="bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
