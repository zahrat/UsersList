import { Image, ImageProps } from "react-native";

export default function CustomImage({ style, ...rest }: ImageProps) {
  return <Image style={style} {...rest} />;
}
