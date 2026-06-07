import { useCallback } from "react";
import CustomFlatList from "../../../atoms/CustomFlatList";
import useUsersListHook from "./usersList.hook";
import UsersListItem from "../../../molecules/UsersListItem";
import { ActivityIndicator } from "react-native";

export default function UsersList() {
  const { users, isPending, refetch, isRefetching } = useUsersListHook();
  const renderItem = useCallback(
    ({ item, index }) => <UsersListItem {...{ item, index }} />,
    [],
  );

  if (isPending) return <ActivityIndicator />;
  return (
    <CustomFlatList
      data={users}
      renderItem={renderItem}
      onRefresh={refetch}
      refreshing={isRefetching}
    />
  );
}
