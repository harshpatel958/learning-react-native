import { View, Text, Image } from "react-native";
import React, { FC } from "react";
interface MyImageProps {
  source: {
    uri: string;
  };
  width: number;
  height: number;
}
const MyImage: FC<MyImageProps> = ({ source, width, height }) => {
  return (
    <Image
      source={source}
      width={width}
      height={height}
      style={{ borderRadius: 10 }}
    />
  );
};

export default MyImage;
