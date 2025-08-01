import { MessageBalloon } from "./message-balloon";
import { ChatMessage } from "./types";
import { useChatMessages } from "@/hooks/use-chat-messages";

export function ChatMessages() {
  const messages: ChatMessage[] = [
    {
      _id: "507f1f77bcf86cd799439011",
      senderId: "other_user",
      senderName: "Ana Silva",
      senderAvatar: "https://ui.shadcn.com/avatars/01.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T09:30:00Z"),
      isRead: true,
      isFromCurrentUser: false,
      createdAt: new Date("2024-08-01T09:30:00Z"),
      updatedAt: new Date("2024-08-01T09:30:00Z"),
    },
    {
      _id: "507f1f77bcf86cd799439012",
      senderId: "current_user",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T09:32:15Z"),
      isRead: true,
      isFromCurrentUser: true,
      replyTo: {
        messageId: "507f1f77bcf86cd799439011",
        message: "Oi! Como você está?",
        isFromCurrentUser: false,
      },
      createdAt: new Date("2024-08-01T09:32:15Z"),
      updatedAt: new Date("2024-08-01T09:32:15Z"),
    },
    {
      _id: "507f1f77bcf86cd799439013",
      senderId: "other_user",
      senderName: "Ana Silva",
      senderAvatar: "https://ui.shadcn.com/avatars/01.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T09:35:42Z"),
      isRead: true,
      isFromCurrentUser: false,
      createdAt: new Date("2024-08-01T09:35:42Z"),
      updatedAt: new Date("2024-08-01T09:35:42Z"),
    },
    {
      _id: "507f1f77bcf86cd799439014",
      senderId: "current_user",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T09:36:20Z"),
      isRead: false,
      isFromCurrentUser: true,
      replyTo: {
        messageId: "507f1f77bcf86cd799439013",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFromCurrentUser: false,
      },
      createdAt: new Date("2024-08-01T09:36:20Z"),
      updatedAt: new Date("2024-08-01T09:36:20Z"),
    },
    {
      _id: "507f1f772124124214",
      senderId: "current_user",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T09:36:20Z"),
      isRead: false,
      isFromCurrentUser: true,
      createdAt: new Date("2024-08-01T09:36:20Z"),
      updatedAt: new Date("2024-08-01T09:36:20Z"),
    },
    {
      _id: "507f1f77bcf86cd799439015",
      senderId: "other_user",
      senderName: "Ana Silva",
      senderAvatar: "https://ui.shadcn.com/avatars/01.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T10:18:45Z"),
      isRead: false,
      isFromCurrentUser: false,
      replyTo: {
        messageId: "507f1f77bcf86cd799439014",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFromCurrentUser: true,
      },

      createdAt: new Date("2024-08-01T10:18:45Z"),
      updatedAt: new Date("2024-08-01T10:18:45Z"),
    },
    {
      _id: "507f1f77bcf86c12679439015",
      senderId: "other_user",
      senderName: "Ana Silva",
      senderAvatar: "https://ui.shadcn.com/avatars/01.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T10:18:45Z"),
      isRead: false,
      isFromCurrentUser: false,
      replyTo: {
        messageId: "507f1f77bcf86cd799439014",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFromCurrentUser: true,
      },

      createdAt: new Date("2024-08-01T10:18:45Z"),
      updatedAt: new Date("2024-08-01T10:18:45Z"),
    },
    {
      _id: "507f1f77bcf8623799439015",
      senderId: "other_user",
      senderName: "Ana Silva",
      senderAvatar: "https://ui.shadcn.com/avatars/01.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T10:18:45Z"),
      isRead: false,
      isFromCurrentUser: false,
      replyTo: {
        messageId: "507f1f77bcf86cd799439014",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFromCurrentUser: true,
      },

      createdAt: new Date("2024-08-01T10:18:45Z"),
      updatedAt: new Date("2024-08-01T10:18:45Z"),
    },
    {
      _id: "507f1f77bcf86cd799439016",
      senderId: "current_user",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: new Date("2024-08-01T10:20:10Z"),
      isRead: false,
      isFromCurrentUser: true,
      createdAt: new Date("2024-08-01T10:20:10Z"),
      updatedAt: new Date("2024-08-01T10:20:10Z"),
    },
  ];

  const { groupedMessages } = useChatMessages(messages);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-6 p-4">
        {groupedMessages.map((group) => (
          <div key={group.date.toISOString()} className="space-y-1">
            <DateSeparator date={group.date} />
            <div className="space-y-2">
              {group.messages.map((message, index) => (
                <MessageBalloon
                  key={message._id || `msg-${index}`}
                  message={message}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DateSeparator({ date }: { date: Date }) {
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
    <div className="flex justify-center py-2">
      <div className="bg-muted px-3 py-1 rounded-full">
        <span className="text-xs font-medium text-muted-foreground">
          {formatDate(date)}
        </span>
      </div>
    </div>
  );
}
