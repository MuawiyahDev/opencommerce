import {
  Database,
  Heart,
  Home,
  LayoutDashboard,
  LayoutGrid,
  Lock,
  Search,
  Truck,
  UserRound,
} from "lucide-react";

const TOP_BAR_LINKS = [
  {
    textKey: "aboutUs",
    href: "/about",
  },
  {
    textKey: "myAccount",
    href: "/profile",
  },
  {
    textKey: "wishlist",
    href: "/wishlist",
  },
  {
    textKey: "orderTracking",
    href: "/order-tracking",
  },
];

const MENU_LINKS = [
  {
    textKey: "home",
    href: "/",
  },
  {
    textKey: "products",
    href: "/products",
  },
  {
    textKey: "categories",
    href: "/categories",
  },
  {
    textKey: "brands",
    href: "/brands",
  },
  {
    textKey: "coupons",
    href: "/coupons",
  },
  {
    textKey: "blog",
    href: "/blog",
  },
  {
    textKey: "contactUs",
    href: "/contact",
  },
];

const MOBILE_BOTTOM_NAV_LINKS = [
  {
    icon: Home,
    href: "/",
  },
  {
    icon: Search,
    href: "/products",
  },
  {
    icon: LayoutGrid,
    href: "/categories",
  },
  {
    icon: Truck,
    href: "/order-tracking",
  },
  {
    icon: UserRound,
    href: "/profile",
  },
];

const CUSTOMER_ACCOUNT_SIDEBAR_LINKS = [
  {
    textKey: "dashboard",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    textKey: "personalInfo",
    href: "/account/personal-info",
    icon: UserRound,
  },
  {
    textKey: "orders",
    href: "/account/orders",
    icon: Database,
  },
  {
    textKey: "wishlist",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    textKey: "changePassword",
    href: "/account/change-password",
    icon: Lock,
  },
  {
    textKey: "addresses",
    href: "/account/addresses",
    icon: Home,
  },
];

export {
  TOP_BAR_LINKS,
  MENU_LINKS,
  MOBILE_BOTTOM_NAV_LINKS,
  CUSTOMER_ACCOUNT_SIDEBAR_LINKS,
};
