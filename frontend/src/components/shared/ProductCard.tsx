import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust path based on your setup
import { useTranslations } from "next-intl";

type ProductCardProps = {
  imageSrc: string;
  alt?: string;
  title: string;
  href: string;
  price: number;
  originalPrice?: number;
  onAddToCart?: () => void;
};

const ProductCard = ({
  imageSrc,
  alt = "",
  title,
  href,
  price,
  originalPrice,
  onAddToCart,
}: ProductCardProps) => {
  const t = useTranslations("common");

  return (
    <div className="border rounded-md md:p-4 sm:p-3 p-2">
      <Link href={href}>
        <Image
          src={imageSrc}
          alt={alt}
          width={200}
          height={250}
          className="w-full xl:h-[275px] lg:h-[230px] md:h-[225px] h-[160px] ml:h-[175px] object-cover object-top rounded-md bg-gray-100"
        />
      </Link>

      <div>
        <Link
          href={href}
          className="font-medium block md:mt-5 mt-3 sm:mt-4 text-sm sm:text-base"
        >
          {title}
        </Link>

        <div className="sm:my-3 my-2 flex items-center gap-3">
          <span className="block md:text-lg text-base text-primary font-bold">
            ${price}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="block text-xs sm:text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <Button className="w-full" onClick={onAddToCart}>
          {t("addToCart")}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
