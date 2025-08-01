import { cn } from "@/lib/utils";
import { ChatMessage, MessageComponentProps, MessageVariant } from "./types";
import { AnimatedMessage } from "./animated-message";

interface MessageBalloonProps {
  message: ChatMessage;
}

export function MessageBalloon({ message }: MessageBalloonProps) {
  const formatTime = (timestamp: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(timestamp);
  };

  return (
    <AnimatedMessage isOwn={message.isFromCurrentUser}>
      {message.isFromCurrentUser ? (
        <OutgoingMessage message={message} formatTime={formatTime} />
      ) : (
        <IncomingMessage message={message} formatTime={formatTime} />
      )}
    </AnimatedMessage>
  );
}

function OutgoingMessage({ message, formatTime }: MessageComponentProps) {
  return (
    <div className="flex justify-end">
      <div className="w-fit max-w-[70%] lg:max-w-[60%]">
        <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-3 relative">
          <ReplyPreview replyTo={message.replyTo} variant="outgoing" />
          <MessageContent content={message.message} />
          <MessageMeta
            timestamp={formatTime(message.timestamp)}
            isRead={message.isRead}
            variant="outgoing"
          />
        </div>
      </div>
    </div>
  );
}

function IncomingMessage({ message, formatTime }: MessageComponentProps) {
  return (
    <div className="flex items-start space-x-3">
      <MessageAvatar
        src={message.senderAvatar}
        alt={message.senderName || "User"}
      />

      <div className="flex-1 min-w-0 max-w-[70%] lg:max-w-[60%]">
        <MessageHeader
          name={message.senderName || "User"}
          timestamp={formatTime(message.timestamp)}
          isRead={message.isRead}
        />

        <div className="bg-card border rounded-2xl rounded-bl-md px-4 py-3 mt-1 max-w-2/3">
          <ReplyPreview replyTo={message.replyTo} variant="incoming" />
          <MessageContent content={message.message} />
        </div>
      </div>
    </div>
  );
}

function MessageAvatar({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;

  return (
    <div className="flex-shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
      />
    </div>
  );
}

function MessageHeader({
  name,
  timestamp,
  isRead,
}: {
  name: string;
  timestamp: string;
  isRead: boolean;
}) {
  return (
    <div className="flex items-center space-x-2 mb-1">
      <span className="text-sm font-semibold text-foreground truncate">
        {name}
      </span>
      <span className="text-xs text-muted-foreground">{timestamp}</span>
      <UnreadIndicator isRead={isRead} />
    </div>
  );
}

function MessageContent({ content }: { content: string }) {
  return (
    <div className="text-sm leading-relaxed break-words whitespace-pre-wrap">
      {content}
    </div>
  );
}

function ReplyPreview({
  replyTo,
  variant,
}: {
  replyTo?: ChatMessage["replyTo"];
  variant: MessageVariant;
}) {
  if (!replyTo) return null;

  const isOutgoing = variant === "outgoing";

  return (
    <div className="mb-3">
      <div
        className={cn(
          "text-xs mb-2",
          isOutgoing
            ? "text-primary-foreground/70 text-right"
            : "text-muted-foreground"
        )}
      >
        {replyTo.isFromCurrentUser
          ? isOutgoing
            ? "Você respondeu"
            : "Respondendo a você"
          : "Respondendo"}
      </div>

      <div
        className={cn(
          "rounded-lg p-3 border-l-4",
          isOutgoing
            ? "bg-primary-foreground/10 border-primary-foreground/30"
            : "bg-muted border-border"
        )}
      >
        <div
          className={cn(
            "text-sm line-clamp-2",
            isOutgoing ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {replyTo.message}
        </div>
      </div>
    </div>
  );
}

function MessageMeta({
  timestamp,
  isRead,
  variant,
}: {
  timestamp: string;
  isRead: boolean;
  variant: MessageVariant;
}) {
  if (variant === "incoming") return null;

  return (
    <div className="flex items-center justify-end space-x-2 mt-2">
      <span className="text-xs text-primary-foreground/70">{timestamp}</span>
      <ReadStatus isRead={isRead} />
    </div>
  );
}

function ReadStatus({ isRead }: { isRead: boolean }) {
  return (
    <div className="flex space-x-1">
      <div className="w-1 h-1 bg-primary-foreground/70 rounded-full" />
      <div
        className={cn(
          "w-1 h-1 rounded-full transition-opacity",
          isRead ? "bg-primary-foreground/90" : "bg-primary-foreground/40"
        )}
      />
    </div>
  );
}

function UnreadIndicator({ isRead }: { isRead: boolean }) {
  if (isRead) return null;

  return <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />;
}
