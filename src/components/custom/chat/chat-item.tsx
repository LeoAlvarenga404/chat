import { Separator } from "@/components/ui/separator";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ChatItemProps {
  id: string;
  name: string;
  image?: string;
  last_message: string;
  time: string;
  unread: boolean;
}

const handleNavigateToChat = (id: string) => {
  

  window.location.href = `/chat/${id}`;

}

export function ChatItem(data: ChatItemProps) {
  return (
    <Link href={`/chat/${data.id}`} className="w-full p-3 flex items-center gap-3 hover:bg-accent cursor-pointer">
      <Image
        src={data.image || "https://ui.shadcn.com/avatars/01.png"}
        alt={data.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <span className="font-semibold">{data.name}</span>

          <span className="text-xs font-medium text-muted-foreground">
            {data.time}
          </span>
        </div>
        <div className="flex items-center gap-1 ">
          <CheckCheck className="text-emerald-600" size={16} />
          <div className="flex items-center justify-between w-full">
            <p className="text-muted-foreground">{data.last_message}</p>
            <div className="h-4.5 min-w-4.5 p-1 grid place-content-center rounded-full bg-emerald-500 text-white text-xs">
              4
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
