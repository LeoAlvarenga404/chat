export interface ChatMessage {
  _id?: string; // MongoDB ObjectId
  senderId: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  isFromCurrentUser: boolean; // Define se é mensagem do usuário atual
  replyTo?: {
    messageId: string;
    message: string;
    isFromCurrentUser: boolean;
  };
  // Campos só para mensagens da outra pessoa
  senderName?: string;
  senderAvatar?: string;
  createdAt?: Date; // MongoDB timestamp
  updatedAt?: Date; // MongoDB timestamp
}

export interface MessageBalloonProps {
  message: ChatMessage;
}

export interface MessageComponentProps {
  message: ChatMessage;
  formatTime: (date: Date) => string;
}

export type MessageVariant = "incoming" | "outgoing";
