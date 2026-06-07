import { Text, TextProps } from "react-native";

export default function CustomText({ style, ...rest }: TextProps) {
  return <Text style={style} {...rest} />;
}
