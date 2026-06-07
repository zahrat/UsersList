import { ScrollView, ScrollViewProps, TextProps } from "react-native";

export default function CustomScrollView({ style, ...rest }: ScrollViewProps) {
  return <ScrollView style={style} {...rest} />;
}
