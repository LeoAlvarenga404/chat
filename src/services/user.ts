export interface UserProps {
  id: string;
  name: string;
  image: string;
  last_message: string;
  time: string;
  unread: boolean;
}


export const userService = {
  getUsers: () => {
    const users: UserProps[] = [
      {
        id: "fs30f",
        name: "John Doe",
        image: "https://ui.shadcn.com/avatars/01.png",
        last_message: "lorem ipsum dolor sit ame",
        time: "00:39",
        unread: true,
      },
      {
        id: "fs30g",
        name: "Jane Smith",
        image: "https://ui.shadcn.com/avatars/02.png",
        last_message: "Lorem ipsum dolor sit.",
        time: "12:15",
        unread: false,
      },
      {
        id: "fs30h",
        name: "Alice Johnson",
        image: "https://ui.shadcn.com/avatars/03.png",
        last_message: "Consectetur adipiscing elit.",
        time: "09:45",
        unread: true,
      },
    ];

    return users;
  },
};
