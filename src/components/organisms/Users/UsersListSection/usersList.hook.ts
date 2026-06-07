import { useGetUsersQuery } from "./hooks";

export default function useUsersListHook() {
  const { data, isPending, refetch, isRefetching } = useGetUsersQuery();

  return {
    users: data?.data?.users,
    isPending,
    isRefetching,
    refetch,
  };
}
