import Image from "next/image";

interface BrandCardProps {
  name: string;
  logo: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ name, logo }) => (
  <div
    className="bg-white shadow-custom p-4 transition grayscale-100 hover:grayscale-0"
    title={name}
  >
    <Image
      src={logo}
      alt={name}
      width={120}
      height={60}
      className="object-contain max-h-[60px] w-auto mx-auto"
      loading="lazy"
    />
  </div>
);

export default BrandCard;
