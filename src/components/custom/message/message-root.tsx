import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MessageRootProps {
  children: ReactNode;
  isOwn?: boolean;
  isFirst?: boolean;
  className?: string;
}

export function MessageRoot({ 
  children, 
  isOwn = false, 
  isFirst = true,
  className 
}: MessageRootProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 mb-4 w-full",
        isOwn && "justify-end flex-row-reverse",
        className
      )}
    >
      {children}
    </div>
  );
}
