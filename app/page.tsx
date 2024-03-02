"use client";
import React, { useEffect, useState } from "react";
import UserList from "./components/User/UserList";
import { fetchData } from "./utils/api";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  isFollowed: boolean;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();
        setUsers(data.map((user: any) => ({ ...user, isFollowed: false })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleFollow = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isFollowed: !user.isFollowed } : user
      )
    );
  };

  const handleDelete = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <UserList users={users} onFollow={handleFollow} onDelete={handleDelete} />

  );
};

export default HomePage;
