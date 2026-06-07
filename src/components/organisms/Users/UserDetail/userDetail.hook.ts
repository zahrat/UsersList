import { useRoute } from "expo-router";
import { useMemo, useState } from "react";
import { flattenToArray } from "~/helpers/object";
import { useGetUsersQuery } from "../UsersListSection/hooks";
import { pick3Numbers } from "~/helpers/utils";

export default function useUserDetailHook() {
  const [showMatchedUsers, setShowMatchedUsers] = useState<boolean>(false);
  const user = useRoute().params?.item;
  const { data: usersData } = useGetUsersQuery();

  const userInfo = useMemo(() => {
    return flattenToArray(JSON.parse(user));
  }, [user]);

  const matchesUsers = useMemo(() => {
    const users = usersData?.data?.users;
    if (users?.length > 3) {
      const numbers = pick3Numbers(users?.length);
      return [users[numbers[0]], users[numbers[1]], users[numbers[2]]];
    } else return users;
  }, [usersData]);

  const onMathBtnPressed = () => {
    setShowMatchedUsers((prev) => !prev);
  };

  return { userInfo, matchesUsers, onMathBtnPressed, showMatchedUsers };
}
