import React from "react";
import { SimpleGrid } from "@mantine/core";
import UserCard from "./UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  isFollowed: boolean;
}

interface UserListProps {
  users: User[];
  onFollow: (userId: number) => void;
  onDelete: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onFollow, onDelete }) => {
  return (
    <SimpleGrid m="lg" cols={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onFollow={onFollow}
          onDelete={onDelete}
        />
      ))}
    </SimpleGrid>
  );
};

export default UserList;
