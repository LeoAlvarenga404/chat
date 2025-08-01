"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  MessageRoot,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageReply,
  MessageBody,
  MessageFooter,
  MessageData,
} from "@/components/custom/message";

const mockMessages: MessageData[] = [
  {
    id: "1",
    content: "Oi! Como você está?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    user: {
      id: "user1",
      name: "Ana Silva",
      avatar: "https://ui.shadcn.com/avatars/01.png",
    },
  },
  {
    id: "2",
    content: "Estou bem, obrigado! E você?",
    timestamp: new Date(Date.now() - 1000 * 60 * 25),
    user: {
      id: "current_user",
      name: "Você",
    },
  },
  {
    id: "3",
    content:
      `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
    timestamp: new Date(Date.now() - 1000 * 60 * 20),
    user: {
      id: "user1",
      name: "Ana Silva",
      avatar: "https://ui.shadcn.com/avatars/01.png",
    },
  },
  {
    id: "4",
    content: "Você viu aquela notícia sobre tecnologia ontem?",
    timestamp: new Date(Date.now() - 1000 * 60 * 18),
    user: {
      id: "user1",
      name: "Ana Silva",
      avatar: "https://ui.shadcn.com/avatars/01.png",
    },
  },
  {
    id: "5",
    content: "Qual notícia você está se referindo?",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    user: {
      id: "current_user",
      name: "Você",
    },
    replyTo: {
      id: "4",
      content: "Você viu aquela notícia sobre tecnologia ontem?",
      user: {
        id: "user1",
        name: "Ana Silva",
      },
    },
  },
  {
    id: "6",
    content: "Sobre a nova IA que foi lançada! Parece muito interessante.",
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
    user: {
      id: "user1",
      name: "Ana Silva",
      avatar: "https://ui.shadcn.com/avatars/01.png",
    },
  },
  {
    id: "7",
    content:
      "Ah sim! Vi sim, realmente é impressionante o que estão conseguindo fazer hoje em dia com inteligência artificial e machine learning.",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    user: {
      id: "current_user",
      name: "Você",
    },
  },
  {
    id: "8",
    content: "Exato! A evolução é muito rápida.",
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    user: {
      id: "user1",
      name: "Ana Silva",
      avatar: "https://ui.shadcn.com/avatars/01.png",
    },
  },
];

function ChatMessage({
  message,
  isOwn,
  isFirst,
}: {
  message: MessageData;
  isOwn: boolean;
  isFirst: boolean;
}) {
  return (
    <MessageRoot isOwn={isOwn} isFirst={isFirst}>
      {!isOwn && (
        <MessageAvatar
          src={message.user.avatar}
          alt={message.user.name}
          isVisible={isFirst}
        />
      )}

      <MessageContent isOwn={isOwn}>
        <MessageHeader
          username={message.user.name}
          showUsername={!isOwn && isFirst}
        />

        {message.replyTo && (
          <MessageReply
            username={message.replyTo.user.name}
            content={message.replyTo.content}
          />
        )}
      
        <MessageBody content={message.content} isOwn={isOwn} />

        <MessageFooter>
          <span className="text-xs text-muted-foreground">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          {isOwn && (
            <span className="text-xs text-muted-foreground ml-auto">✓✓</span>
          )}
        </MessageFooter>
      </MessageContent>
    </MessageRoot>
  );
}
export function ChatContent() {
  const { id } = useParams();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentUserId = "current_user";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mockMessages]);

  const chatMessages = mockMessages;

  return (
    <div className="flex-1 bg-background overflow-hidden">
      <div className="h-full overflow-y-auto p-4 space-y-1">
        {chatMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-medium text-muted-foreground mb-2">
              Nenhuma mensagem ainda
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Seja o primeiro a enviar uma mensagem nesta conversa!
            </p>
          </div>
        ) : (
          <>
            {chatMessages.map((message, index) => {
              const isOwn = message.user.id === currentUserId;
              const previousMessage = chatMessages[index - 1];
              const nextMessage = chatMessages[index + 1];

              const isFirst =
                !previousMessage || previousMessage.user.id !== message.user.id;

              const needsSpacing =
                nextMessage && nextMessage.user.id !== message.user.id;

              return (
                <div key={message.id} className={needsSpacing ? "mb-4" : ""}>
                  <ChatMessage
                    message={message}
                    isOwn={isOwn}
                    isFirst={isFirst}
                  />
                </div>
              );
            })}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>
    </div>
  );
}