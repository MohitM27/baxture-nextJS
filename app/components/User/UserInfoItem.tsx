import React from "react";
import { Box, Anchor } from "@mantine/core";

interface UserInfoItemProps {
  icon: React.ReactNode;
  text: string;
}

const UserInfoItem: React.FC<UserInfoItemProps> = ({ icon, text }) => (
  <Box
    mt="xs"
    style={{ display: "flex", alignItems: "center", color: "gray", gap: 10 }}
  >
    {icon}
    <Anchor
      href={text.startsWith("http") ? text : `mailto:${text}`}
      target="_blank"
      style={{ color: "gray" }}
      fz="md"
    >
      {text}
    </Anchor>
  </Box>
);

export default UserInfoItem;
