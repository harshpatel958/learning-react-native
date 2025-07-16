import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewProps,
  StyleSheet,
} from "react-native";
import React, { FC } from "react";

interface CustomTextInputProps {
  value: string;
  setValue: (val: string) => void;
  placeholder: string;
}
const CustomTextInput: FC<CustomTextInputProps> = ({
  value,
  setValue,
  placeholder,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      style={styles.inputStyle}
      onChangeText={setValue}
    />
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",

    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    fontSize:14
  },
});
export default CustomTextInput;
