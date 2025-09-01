import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
      </Box>
      <Box p={10}>
        <Group>
          <Indicator color="red" position="bottom-end">
            <Avatar radius="xl" src="../../public/me.jpg" />
          </Indicator>
          <Text>User : Chaithat : Admin</Text>
        </Group>
      </Box>
    </Stack>
  );
}
