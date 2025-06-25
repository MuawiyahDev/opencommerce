import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  iconSrc: string;
  label: string;
  href: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  iconSrc,
  label,
  href,
}) => {
  return (
    <Link
      href={href}
      className="bg-gray-100 rounded-md flex items-center justify-center flex-col px-2 py-4 hover:bg-gray-200 transition"
    >
      <Image
        src={iconSrc}
        alt={label}
        width={64}
        height={64}
        fetchPriority="high"
        quality={100}
      />
      <span className="block font-semibold uppercase mt-2">{label}</span>
    </Link>
  );
};

export default CategoryItem;
