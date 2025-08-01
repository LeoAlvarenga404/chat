import { ChatMessage } from "./types";

interface MessageGroupProps {
  messages: ChatMessage[];
  date: Date;
}

export function MessageGroup({ messages, date }: MessageGroupProps) {
  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Hoje";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Ontem";
    } else {
      return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(date);
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-center">
        <div className="bg-muted px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-muted-foreground">
            {formatDate(date)}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        {messages.map((message, index) => {
          const showAvatar = shouldShowAvatar(message, messages[index - 1]);
          const isLast =
            index === messages.length - 1 ||
            shouldShowAvatar(messages[index + 1], message);

          return (
            <div
              key={message._id || `msg-${index}`}
              className={`${
                !showAvatar && !message.isFromCurrentUser ? "ml-13" : ""
              }`}
            >
            </div>
          );
        })}
      </div>
    </div>
  );
}

function shouldShowAvatar(
  currentMessage?: ChatMessage,
  previousMessage?: ChatMessage
): boolean {
  if (!currentMessage || !previousMessage) return true;

  const timeDiff =
    currentMessage.timestamp.getTime() - previousMessage.timestamp.getTime();
  const fiveMinutes = 5 * 60 * 1000;

  return (
    currentMessage.senderId !== previousMessage.senderId ||
    timeDiff > fiveMinutes
  );
}
