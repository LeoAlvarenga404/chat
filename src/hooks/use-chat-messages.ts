import { useMemo } from "react";
import { ChatMessage } from "../components/custom/chat/types";

export function useChatMessages(messages: ChatMessage[]) {
  const groupedMessages = useMemo(() => {
    const groups: { [key: string]: ChatMessage[] } = {};

    messages.forEach((message) => {
      const dateKey = message.timestamp.toDateString();
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(message);
    });

    return Object.entries(groups).map(([dateKey, msgs]) => ({
      date: new Date(dateKey),
      messages: msgs.sort(
        (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
      ),
    }));
  }, [messages]);

  const hasUnreadMessages = useMemo(() => {
    return messages.some((msg) => !msg.isRead && !msg.isFromCurrentUser);
  }, [messages]);

  const lastMessage = useMemo(() => {
    return messages[messages.length - 1];
  }, [messages]);

  return {
    groupedMessages,
    hasUnreadMessages,
    lastMessage,
    totalMessages: messages.length,
  };
}
