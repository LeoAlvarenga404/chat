import { Input } from "@/components/ui/input";

export function ChatInput() {
  return (
    <div className="bg-background p-4 flex items-center justify-center">
      <Input
        type="text"
        className="border h-12 rounded w-6/7"
        placeholder="Type your message..."
      />
    </div>
  );
}
