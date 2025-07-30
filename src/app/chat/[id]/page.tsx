"use client";

import { ChatContent } from "@/components/custom/chat/chat-content";
import { HeaderChat } from "@/components/custom/chat/chat-header";
import { ChatInput } from "@/components/custom/chat/chat-input";
import { useParams } from "next/navigation";
import {userService} from '@/services/user';
export default function Chat() {
  const { id } = useParams();

  const users = userService.getUsers();

  const user = users.find(user => user.id === id);

  return (
    <div className="flex-1 flex flex-col">
      <HeaderChat data={user}/>
      <ChatContent />
      <ChatInput />
    </div>
  );
}
