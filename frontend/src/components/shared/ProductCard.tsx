import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust path based on your setup

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
  return (
    <div className="border rounded-md p-4">
      <Link href={href}>
        <Image
          src={imageSrc}
          alt={alt}
          width={200}
          height={250}
          className="w-full xl:h-[275px] lg:h-[230px] md:h-[225px] h-[160px] ml:h-[175px] object-cover object-top rounded-md"
        />
      </Link>

      <div>
        <Link
          href={href}
          className="font-medium block mt-6 text-sm sm:text-base"
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
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
