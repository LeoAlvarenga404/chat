import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedMessageProps {
  children: ReactNode;
  isOwn?: boolean;
  delay?: number;
}

export function AnimatedMessage({
  children,
  isOwn = false,
  delay = 0,
}: AnimatedMessageProps) {
  return (
    <div
      className={cn(
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-300 ",
        isOwn ? "slide-in-from-right-4" : "slide-in-from-left-4"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface TypingIndicatorProps {
  senderName: string;
  avatar?: string;
}

export function TypingIndicator({ senderName, avatar }: TypingIndicatorProps) {
  return (
    <AnimatedMessage>
      <div className="flex items-start space-x-3">
        {avatar && (
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt={senderName}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
            />
          </div>
        )}

        <div className="flex-1 min-w-0 max-w-[70%] lg:max-w-[60%]">
          <div className="text-xs text-muted-foreground mb-1">
            {senderName} está digitando...
          </div>

          <div className="bg-card border rounded-2xl rounded-bl-md px-4 py-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse delay-75" />
              <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse delay-150" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedMessage>
  );
}
