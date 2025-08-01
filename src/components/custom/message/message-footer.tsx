import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MessageFooterProps {
  children: ReactNode;
  className?: string;
}

export function MessageFooter({ children, className }: MessageFooterProps) {
  return (
    <div className={cn("flex items-center gap-1 mt-1", className)}>
      {children}
    </div>
  );
}