import Image from "next/image";
import { cn } from "@/lib/utils";

interface MessageAvatarProps {
  src?: string;
  alt: string;
  isVisible?: boolean;
  className?: string;
}

export function MessageAvatar({ 
  src = "https://ui.shadcn.com/avatars/01.png", 
  alt, 
  isVisible = true,
  className 
}: MessageAvatarProps) {
  if (!isVisible) {
    return <div className="w-[35px]" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={35}
      height={35}
      className={cn("rounded-full", className)}
    />
  );
}