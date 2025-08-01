import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MessageContentProps {
  children: ReactNode;
  isOwn?: boolean;
  className?: string;
}

export function MessageContent({ 
  children, 
  isOwn = false,
  className 
}: MessageContentProps) {
  return (
    <div
      className={cn(
        "p-3 w-fit rounded-b-xl max-w-[65%]",
        isOwn 
          ? "bg-primary text-primary-foreground rounded-tl-xl" 
          : "bg-muted text-muted-foreground rounded-tr-xl",
        className
      )}
    >
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}