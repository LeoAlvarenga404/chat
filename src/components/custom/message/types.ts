export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface MessageData {
  id: string;
  content: string;
  timestamp: Date;
  user: User;
  replyTo?: {
    id: string;
    content: string;
    user: User;
  };
}