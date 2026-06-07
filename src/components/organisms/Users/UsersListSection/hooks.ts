import { useQuery } from "@tanstack/react-query";
import { usersQueryKey } from "~/apis/users/usersQueryKey";
import { getUsers } from "~/apis/users";

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: [usersQueryKey.getUsers],
    queryFn: () => getUsers(),
  });
};
