import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="UsersListScreen"
        options={{ headerTitle: "Users List" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        options={{ headerTitle: "User Detail" }}
      />
    </Stack>
  );
}
