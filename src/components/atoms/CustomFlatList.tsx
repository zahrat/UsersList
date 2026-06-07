import { FlatListProps, FlatList } from "react-native";

export default function CustomFlatList(props: FlatListProps<any>) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
}
