import { View } from "react-native";
import UsersListItem from "~/components/molecules/UsersListItem";

export default function MatchesUsers({ users }: any) {
  return (
    <View>
      {users?.map((user, index) => (
        <UsersListItem item={user} index={index} key={user?.id} />
      ))}
    </View>
  );
}
