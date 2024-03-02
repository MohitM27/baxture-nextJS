import React from "react";
import { Card, Button, Text, Avatar, Group } from "@mantine/core";
import {
  IconStar,
  IconUserPlus,
  IconUserMinus,
  IconTrash,
  IconAt,
  IconPhoneCall,
  IconWorld,
} from "@tabler/icons-react";
import UserInfoItem from "./UserInfoItem";
import Link from "next/link";

interface UserCardProps {
  user: User;
  onFollow: (userId: number) => void;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onFollow, onDelete }) => {
  return (
    <Card withBorder shadow="md" radius="md" padding="lg">
      <Link href={`https://www.${user.website}`} passHref>
        <Avatar
          size={120}
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
          mx="auto"
        />
      </Link>

      <Text mt="md" fz="lg" fw={500} align="center">
        {user.name}
        {"  "}
        {user.isFollowed && <IconStar size={16} />}
      </Text>

      <UserInfoItem icon={<IconAt size={"1rem"} />} text={user.email} />
      <UserInfoItem icon={<IconPhoneCall size={"1rem"} />} text={user.phone} />
      <UserInfoItem
        icon={<IconWorld size={"1rem"} />}
        text={`https://www.${user.website}`}
      />

      <Group
        gap={5}
        align="center"
        justify="flex-start"
        wrap={"nowrap"}
        mt={15}
      >
        <Button
          style={{ flex: "0 0 calc(50% - 5px)" }}
          leftSection={
            user.isFollowed ? (
              <IconUserMinus size={16} />
            ) : (
              <IconUserPlus size={16} />
            )
          }
          variant={user.isFollowed ? "default" : "filled"}
          onClick={() => onFollow(user.id)}
        >
          {user.isFollowed ? "Unfollow" : "Follow"}
        </Button>
        <Button
          variant="outline"
          style={{ flex: "0 0 calc(50% - 5px)" }}
          leftSection={<IconTrash size={16} />}
          onClick={() => onDelete(user.id)}
        >
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default UserCard;
