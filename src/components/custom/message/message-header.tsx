import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MessageHeaderProps {
  username: string;
  timestamp?: Date;
  showUsername?: boolean;
  className?: string;
}

export function MessageHeader({ 
  username, 
  timestamp, 
  showUsername = true,
  className 
}: MessageHeaderProps) {
  if (!showUsername && !timestamp) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showUsername && (
        <Label className="font-semibold text-xs">
          {username}
        </Label>
      )}
      {timestamp && (
        <span className="text-xs text-muted-foreground">
          {timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      )}
    </div>
  );
}