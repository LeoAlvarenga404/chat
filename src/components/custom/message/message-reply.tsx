import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MessageReplyProps {
  username: string;
  content: string;
  className?: string;
}

export function MessageReply({ 
  username, 
  content,
  className 
}: MessageReplyProps) {
  return (
    <div className={cn(
      "flex items-center gap-2 p-2 rounded bg-background/50 border-l-2 border-primary",
      className
    )}>
      <div className="flex-1 min-w-0">
        <Label className="text-xs font-medium text-muted-foreground">
          {username}
        </Label>
        <p className="text-xs text-muted-foreground truncate">
          {content}
        </p>
      </div>
    </div>
  );
}