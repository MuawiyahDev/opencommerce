import Image from "next/image";
import React from "react";
import Search from "./Search";
import UserInfo from "./UserInfo";
import { Heart, ShoppingBasket } from "lucide-react";
import BadgeIcon from "./BadgeIcon";

const Navbar = () => {
  return (
    <nav className="py-5 border-b">
      <div className="container">
        <div className="flex items-center justify-between gap-3">
          <div>
            <Image
              src="/logo.svg"
              alt=""
              width={215}
              height={30}
              className="w-auto h-[30px]"
            />
          </div>

          <div className="max-w-[500px] w-full">
            <Search />
          </div>

          <div className="flex items-center gap-10">
            <UserInfo />

            <div className="flex gap-4">
              <BadgeIcon
                href="/wishlist"
                icon={Heart}
                count={3}
                badgeColor="bg-rose-500"
              />
              <BadgeIcon
                href="/cart"
                icon={ShoppingBasket}
                count={5}
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
