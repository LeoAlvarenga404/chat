import { cn } from "@/lib/utils";

interface MessageBodyProps {
  content: string;
  isOwn?: boolean;
  className?: string;
}

export function MessageBody({ 
  content, 
  isOwn = false,
  className 
}: MessageBodyProps) {
  return (
    <p className={cn(
      "text-sm leading-relaxed",
      isOwn ? "text-primary-foreground" : "text-foreground",
      className
    )}>
      {content}
    </p>
  );
}