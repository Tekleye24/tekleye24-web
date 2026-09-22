import Image from "next/image";

type ChurchLogoProps = {
  className?: string;
  priority?: boolean;
};

export function ChurchLogo({ className, priority }: ChurchLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Tekleye 24 church seal"
      width={200}
      height={200}
      priority={priority}
      className={`rounded-full object-cover ${className ?? ""}`}
    />
  );
}
