import { View, Text, StyleSheet, TextStyle } from "react-native";
import React, { FC } from "react";
interface MyTextProps {
  text: string;
  customStyle?: TextStyle;
}
const MyText: FC<MyTextProps> = ({ text, customStyle }) => {
  return <Text style={[styles.defaultStyle, customStyle]}>{text}</Text>;
};
const styles = StyleSheet.create({
  defaultStyle: {},
});
export default MyText;
