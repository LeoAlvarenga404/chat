import { UserProps } from "@/services/user";


export function HeaderChat({ data }: { data: UserProps | undefined }) {
  return (
    <header className="w-full flex items-center p-4 bg-background border-b">
      {data ? (
        <>
          <img src={data.image} alt={data.name} className="w-10 h-10 rounded-full" />
          <div className="ml-3">
            <h2 className="text-lg font-semibold">{data.name}</h2>
          </div>
        </>
      ) : (
        <p className="text-muted-foreground">Select a chat</p>
      )}
    </header>
  );
}

