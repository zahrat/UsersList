import { useCallback } from "react";
import { CustomFlatList } from "~/components";
import useUsersListHook from "./usersList.hook";
import UsersListItem from "~/components/molecules/UsersListItem";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function UsersList() {
  const { users, isPending, refetch, isRefetching } = useUsersListHook();
  const renderItem = useCallback(
    ({ item, index }) => <UsersListItem {...{ item, index }} />,
    [],
  );

  if (isPending)
    return <ActivityIndicator size="large" style={styles.loading} />;
  return (
    <CustomFlatList
      data={users}
      renderItem={renderItem}
      onRefresh={refetch}
      refreshing={isRefetching}
    />
  );
}

const styles = StyleSheet.create({
  loading: { marginTop: 20 },
});
